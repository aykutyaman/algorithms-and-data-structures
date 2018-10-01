import { firstUniqueChar } from './firstUniqueChar';

test('unique character does not exist', () => {
  expect(firstUniqueChar('ccooddee')).toBe(-1);
});

test('first is unique character', () => {
  expect(firstUniqueChar('leetcode')).toBe(0);
});

test('first unique character is in middle', () => {
  expect(firstUniqueChar('loveleetcode')).toBe(2);
});
