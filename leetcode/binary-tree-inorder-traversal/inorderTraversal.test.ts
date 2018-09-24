// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/

import {
  TreeNode,
  inorderTraversal
} from './inorderTraversal'

test('three nodes', () => {
  const n1 = TreeNode(1);
  const n2 = TreeNode(2);
  const n3 = TreeNode(3);

  n1.right = n2;
  n2.left = n3;

  const result = inorderTraversal(n1);

  expect(result).toEqual([1, 3, 2]);
})

test('null node', () => {
  expect(inorderTraversal(null)).toEqual([]);
})
