import { dominantIndex } from './dominantIndex';

test('no dominant index', () => {
  expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
});

test('with dominant index', () => {
  expect(dominantIndex([3, 6, 1, 0])).toBe(1);
});

test('with dominant index', () => {
  expect(dominantIndex([0, 0, 3, 2])).toBe(-1);
});

test('with one number', () => {
  expect(dominantIndex([1])).toBe(0);
});

test('with two numbers', () => {
  expect(dominantIndex([1, 3])).toBe(1);
});

test('with two numbers', () => {
  expect(dominantIndex([1, 0])).toBe(0);
});
