
const COMPONENT_NAME_FORMAT = "Figma Component"
const DELIMITER = "/"
const COMPONENT_KEYWORD = "components"

export function syncFigmaWithStorybook(root: DocumentNode, pageFormat = COMPONENT_NAME_FORMAT, delimiter = "/") {
    const foundNodes = root.children.filter(it => {
        console.log(it.name)
        return isComponent(it, delimiter)})

    return getComponentNames(foundNodes)
}

function isComponent<T extends BaseNode>(node: T, delimiter): boolean {
    if (!node)
        return false
    return node.name.split(delimiter)[0].trim().toLowerCase() === COMPONENT_KEYWORD.toLowerCase()
}

function getComponentNames(nodes: BaseNode[]): string[] {
    const componentNames = nodes.map(it => it.name.split(DELIMITER)[1].trim())

return componentNames
}

export function getDiff(storybook: string[], figma: string[]): string[] {
    const missingComponents = figma.filter(it => !storybook.includes(it));
    
    return missingComponents
}
