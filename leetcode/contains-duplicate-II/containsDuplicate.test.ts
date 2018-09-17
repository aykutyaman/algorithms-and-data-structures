import { containsDuplicate } from './containsDuplicate';

test('one duplicate', () => {
  const max = 3;
  expect(containsDuplicate([1, 2, 3, 1], max)).toBe(true);
});

test('three duplicated numbers', () => {
  const max = 3;
  expect(containsDuplicate([1, 2, 1, 1], max)).toBe(true);
});

test('three duplicated numbers', () => {
  const max = 1;
  expect(containsDuplicate([1, 0, 1, 1], max)).toBe(true);
});

test('no duplicated numbers', () => {
  const max = 3;
  expect(containsDuplicate([1, 2, 3, 5], max)).toBe(false);
});

test('duplicated numbers with big indices diff ', () => {
  const max = 2;
  expect(containsDuplicate([2, 8, 3, 2, 7], max)).toBe(false);
});

test('multiple duplicated with big indices diff', () => {
  const max = 2;
  expect(containsDuplicate([1, 2, 3, 1, 2, 3], max)).toBe(false);
});

test('not continue to check', () => {
  const max = 1;
  const input = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0]
  expect(containsDuplicate(input, max)).toBe(true);
});
