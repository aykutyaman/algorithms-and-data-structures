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
const traverseInOrder = (current: Node, visitor: Function): void => {
  if (current) {
    current.left && traverseInOrder(current.left, visitor);
    visitor(current);
    current.right && traverseInOrder(current.right, visitor);
  }
}

// current, left, right
const traversePreOrder = (current: Node, visitor: Function): void => {
  if (current) {
    visitor(current);
    current.left && traversePreOrder(current.left, visitor);
    current.right && traversePreOrder(current.right, visitor);
  }
}

// left, right, current
const traversePostOrder = (current: Node, visitor: Function): void => {
  if (current) {
    current.left && traversePostOrder(current.left, visitor);
    current.right && traversePostOrder(current.right, visitor);
    visitor(current);
  }
}

const find = (current: Node, value: any): Node | null => {
  if (current.value === value) {
    return current;
  }
  return value < current.value
    ? current.left && find(current.left, value)
    : current.right && find(current.right, value);
}

const findMinimum = (current: Node): Node | null => (
  current.left === null
    ? current
    : findMinimum(current.left)
)

const findMaximum = (current: Node): Node | null => (
  current.right === null
    ? current
    : findMaximum(current.right)
)

// TODO: implement map, reduce, filter https://bit.ly/2PQA7Rt
export {
  node,
  insert,
  traverseInOrder,
  traversePreOrder,
  traversePostOrder,
  find,
  findMinimum,
  findMaximum
}
