interface Node {
  value: any,
  left: any,
  right: any
}
const node = (
  value, left = null, right = null
): Node => ({ value, left, right });

const insertLeft = (current: Node, toInsert: Node): void => {
  current.left === null
    ? current.left = toInsert
    : insert(current.left, toInsert)
}

const insertRight = (current: Node, toInsert: Node): void => {
  current.right === null
    ? current.right = toInsert
    : insert(current.right, toInsert)
}

const insert = (current: Node, toInsert: Node): void => {
  toInsert.value < current.value
    ? insertLeft(current, toInsert)
    : insertRight(current, toInsert)
}

// left, current, right
const traverseInOrder = (node: Node, visitor: Function): void => {
  if (node) {
    node.left && traverseInOrder(node.left, visitor);
    visitor(node);
    node.right && traverseInOrder(node.right, visitor);
  }
}

// current, left, right
const traversePreOrder = (node: Node, visitor: Function): void => {
  if (node) {
    visitor(node);
    node.left && traversePreOrder(node.left, visitor);
    node.right && traversePreOrder(node.right, visitor);
  }
}

// left, right, current
const traversePostOrder = (node: Node, visitor: Function): void => {
  if (node) {
    node.left && traversePostOrder(node.left, visitor);
    node.right && traversePostOrder(node.right, visitor);
    visitor(node);
  }
}

export {
  node,
  insert,
  traverseInOrder,
  traversePreOrder,
  traversePostOrder
}
