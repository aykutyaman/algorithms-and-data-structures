// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/

import {
  TreeNode,
  preorderTraversal
} from './preorderTraversal'

test('three nodes', () => {
  const n1 = TreeNode(1);
  const n2 = TreeNode(2);
  const n3 = TreeNode(3);

  n1.right = n2;
  n2.left = n3;

  const result = preorderTraversal(n1);

  expect(result).toEqual([1, 2, 3]);
})

test('null node', () => {
  expect(preorderTraversal(null)).toEqual([]);
})
