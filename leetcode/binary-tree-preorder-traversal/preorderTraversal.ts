const preorderTraversal = (root, result = []) => {
  if (root) {
    result.push(root.val);
    root.left && preorderTraversal(root.left, result);
    root.right && preorderTraversal(root.right, result);
  }
  return result;
}

const TreeNode = (val, left = null, right = null) => ({
  val,
  left,
  right
})

export {
  TreeNode,
  preorderTraversal
}
