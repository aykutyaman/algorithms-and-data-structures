import { pivotIndex } from './pivotIndex';

test('no pivot', () => {
  const numbers = [1, 2, 3];
  expect(pivotIndex(numbers)).toBe(-1);
});

test('empty array', () => {
  const numbers = [];
  expect(pivotIndex(numbers)).toBe(-1);
});

test('pivot with small array', () => {
  const numbers = [3, 7, 3];
  expect(pivotIndex(numbers)).toBe(1);
});

test('pivot with different numbers', () => {
  const numbers = [1, 7, 3, 6, 5, 6];
  expect(pivotIndex(numbers)).toBe(3);
});

test('pivot with negative numbers', () => {
  const numbers = [-1, 1, 0];
  expect(pivotIndex(numbers)).toBe(2);
});

test('pivot with multiple negative numbers', () => {
  const numbers = [-1, -1, -1, 0, 1, 1];
  expect(pivotIndex(numbers)).toBe(0);
});
