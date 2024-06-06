import { getComponentSetParentName } from "./utils/util";
import { getDiff, syncFigmaWithStorybook } from "./utils/sync";
import { getStorybookComponents, searchOnGithub } from "./utils/github";

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 500,
  height: 500
});
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg: any) => {
  if (msg.type === 'fetch-components') {
    // console.log(await searchOnGithub("button")) 
    try {
      await figma.loadAllPagesAsync()
      const componentDictionary = syncFigmaWithStorybook(figma.root)
      const storybookComponents = await getStorybookComponents();
      console.log("Storybook components:", storybookComponents)
      console.log("Figma Component:", componentDictionary)
      const missingComponents = getDiff(storybookComponents, componentDictionary).map(it => ({ name: it.name, id: it.id }))
      console.log("Missing Components:", missingComponents.map(it => ({ name: it.name, id: it.id })))
      figma.ui.postMessage({ type: 'components', components: missingComponents });
    } catch (e) {
      console.error(e)
    }

  } else if (msg.type === "cancel") {
    figma.closePlugin();
  } else if (msg.type === 'component-action') {
    const { nodeId, componentName } = msg;
    await handleComponentAction(nodeId, componentName.split("/")[1].trim());
  }
};

async function exportComponentAsPng(nodeId) {
  const node = await figma.getNodeByIdAsync(nodeId);
  console.log(node)
  if (!node || node.type !== "PAGE") {
    figma.notify("Component not found");
    return null;
  }


  const png = await node.exportAsync();
  return figma.base64Encode(png);
}

async function generateStorybookTemplate(componentName, image) {
  try {
    console.log("Generating story...", componentName, image)
    const response = await fetch('http://localhost:3000/generate-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        componentName: componentName,
        image: image
      })
    });
    if(!response.ok)
      throw new Error("Something went wrong")
    console.log(JSON.stringify(response,null, 4))
    const codeResponse = await response.json()
    return codeResponse["code"]
  } catch (e) {
    console.error(e)
  }
}

async function handleComponentAction(nodeId, componentName) {
  const base64Png = await exportComponentAsPng(nodeId);

  if (!base64Png) return;

  const storyTemplate = await generateStorybookTemplate(componentName, base64Png);
  if(!storyTemplate)
    figma.notify("Something went wrong!")
  await createBranchAndAddFilesToRepo(componentName, base64Png, storyTemplate);

  figma.notify("Component exported and Storybook story generated");
}

// GitHub-specific functions using NestJS backend
async function createBranchAndAddFilesToRepo(componentName, base64Png, storyTemplate) {
  const response = await fetch('http://localhost:3000/create-story', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      componentName,
      base64Png,
      storyTemplate
    })
  });

  if (!response.ok) {
    figma.notify('Failed to create branch and pull request');
    return;
  }

  const result = await response.json();
  console.log(result)
}
