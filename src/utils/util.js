export function getComponentSetParentName(node) {
    const isParent = false;
    let currentNode = null;
    while (node.parent && node.parent.type !== "COMPONENT_SET") {
        currentNode = node.parent;
        if (!currentNode.parent || currentNode.parent.type === "PAGE" || currentNode.parent.type === "DOCUMENT")
            throw new Error("No component parent found!");
    }
    if (!currentNode)
        throw new Error("No component parent found!");
    return currentNode.name;
}
