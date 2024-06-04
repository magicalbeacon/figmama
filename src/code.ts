import { getComponentSetParentName } from "./utils/util";
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async  (msg: {type: string, count: number}) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  // console.log(JSON.stringify(figma.currentPage.selection[0].name))
  console.log(figma.currentPage.selection[0].id)
  const currentNode = figma.currentPage.selection[0]
  if(currentNode.type === "COMPONENT") {
    if(currentNode.variantProperties)
      console.log(currentNode.variantProperties["colour code"])
    
  }
  // console.log(currentNode.parent.type)
  console.log(getComponentSetParentName(currentNode))



  // console.log(figma.currentPage.selection[0].parent?.name)
  // console.log(JSON.stringify(figma.currentPage.selection[0].parent, null, 4))
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
