// Design an algorithm that rearranges the elements of an array so that all
// all those originally stored at even suffixes are placed before those at
// odd suffixes.

import { rearrange } from './rearrange';

test('odd length of numbers', () => {
  const given = [1, 2, 3, 4, 5];
  const expected = [1, 3, 5, 2, 4];
  expect(rearrange(given)).toEqual(expected);
});

test('even length of numbers', () => {
  const given = [1, 2, 3, 4, 5, 6, 7, 8];
  const expected = [1, 3, 5, 7, 2, 4, 6, 8];
  expect(rearrange(given)).toEqual(expected);
});

test('even length of characters', () => {
  const given = ['a', 'b', 'c', 'd', 'e', 'f'];
  const expected = ['a', 'c', 'e', 'b', 'd', 'f'];
  expect(rearrange(given)).toEqual(expected);
});

test('odd length of characters', () => {
  const given = ['a', 'b', 'c', 'd', 'e', 'f', 'h'];
  const expected = ['a', 'c', 'e', 'h', 'b', 'd', 'f'];
  expect(rearrange(given)).toEqual(expected);
});
