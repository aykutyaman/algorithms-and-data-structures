// https://leetcode.com/problems/delete-columns-to-make-sorted/

import { minDeletionSize, zip } from './minDeletionSize';

test('minDeletionSize', () => {
  const given = ['cba', 'daf', 'ghi']
  expect(minDeletionSize(given)).toBe(1)
})

test('zip two strings', () => {
  const given = ['abcx', 'defz']
  const expected = [['a', 'd'], ['b', 'e'], ['c', 'f'], ['x', 'z']]
  expect(zip(given)).toEqual(expected)
})
