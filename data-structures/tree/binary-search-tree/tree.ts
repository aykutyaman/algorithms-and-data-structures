interface Node {
  value: any,
  left: any,
  right: any
}
const node = (
  value, left = null, right = null
): Node => ({ value, left, right });

const left = (current: Node, toInsert: Node): void => {
  current.left === null
    ? current.left = toInsert
    : insert(current.left, toInsert)
}

const right = (current: Node, toInsert: Node): void => {
  current.right === null
    ? current.right = toInsert
    : insert(current.right, toInsert)
}

const insert = (current: Node, toInsert: Node): void => {
  toInsert.value < current.value
    ? left(current, toInsert)
    : right(current, toInsert)
}

const traverseInOrder = (node: Node, visitor: Function): void => {
  if (node) {
    node.left && traverseInOrder(node.left, visitor);
    visitor(node);
    node.right && traverseInOrder(node.right, visitor);
  }
}

export {
  node,
  insert,
  traverseInOrder
}
