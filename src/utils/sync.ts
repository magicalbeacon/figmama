
const COMPONENT_NAME_FORMAT = "Figma Component"
const DELIMITER = "/"
const COMPONENT_KEYWORD = "components"

export function syncFigmaWithStorybook(root: DocumentNode, pageFormat = COMPONENT_NAME_FORMAT, delimiter = "/") {
    const foundNodes = root.children.filter(it => {
        console.log(it.name)
        return isComponent(it, delimiter)})

    return foundNodes
}

function isComponent<T extends BaseNode>(node: T, delimiter): boolean {
    if (!node)
        return false
    return node.type === "COMPONENT_SET" || node.type === "COMPONENT" || node.name.split(delimiter)[0].trim().toLowerCase() === COMPONENT_KEYWORD.toLowerCase()
}

