const TreeNode = (val, left = null, right = null) => ({
  val,
  left,
  right
})

const inorderTraversal = (root, result = []) => {
  if (root) {
    root.left && inorderTraversal(root.left, result);
    result.push(root.val);
    root.right && inorderTraversal(root.right, result);
  }
  return result;
}

export {
  TreeNode,
  inorderTraversal
}
