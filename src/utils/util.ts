
export function getComponentSetParentName<T extends BaseNode>(node: T): string {
    const isParent = false;
    let currentNode: any  = node;
    while(currentNode && currentNode.type !== "COMPONENT_SET"){
        currentNode = node.parent
    }
    if(!currentNode)
        return ""
    return currentNode.name
}