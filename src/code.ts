import { getComponentSetParentName } from "./utils/util";
import { syncFigmaWithStorybook } from "./utils/sync";
import { searchOnGithub } from "./utils/github";

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.postMessage(getComponentSetParentName(figma.currentPage.selection[0]))
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async  (msg: {type: string, count: number}) => {
  console.log("onMessage")

  console.log(await searchOnGithub("button")) 

  // await figma.loadAllPagesAsync()
  // try{ 
  //   const componentDictionary = syncFigmaWithStorybook(figma.root)
  //   console.log(JSON.stringify(componentDictionary, null, 4))
  // }catch(e) {
  //   console.error(e)
  // }
  

  
  // console.log(figma.currentPage.selection[0].parent?.name)
  // console.log(JSON.stringify(figma.currentPage.selection[0].parent, null, 4))
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();

};
