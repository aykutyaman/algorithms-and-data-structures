import {
  recursiveSearch,
  iterativeSearch,
} from './binarySearch';


// Iterative
test('iterativeSearch empty array', () => {
  const numbers = [];
  expect(iterativeSearch(numbers, 1)).toBe(false);
});


test('iterativeSearch small array', () => {
  const numbers = [1];
  expect(iterativeSearch(numbers, 1)).toBe(true);
  expect(iterativeSearch(numbers, 16)).toBe(false);
});

test('iterativeSearch with big array', () => {
  const numbers = [1, 3, 9, 16, 29, 39, 41, 41, 99];
  expect(iterativeSearch(numbers, 0)).toBe(false);
  expect(iterativeSearch(numbers, 16)).toBe(true);
  expect(iterativeSearch(numbers, 41)).toBe(true);
});

// Recursive
test('recursiveSearch empty array', () => {
  const numbers = [];
  expect(recursiveSearch(numbers, 1)).toBe(false);
});

test('recursiveSearch small array', () => {
  const numbers = [1];
  expect(recursiveSearch(numbers, 1)).toBe(true);
  expect(recursiveSearch(numbers, 16)).toBe(false);
});

test('recursiveSearch with big array', () => {
  const numbers = [1, 3, 9, 16, 29, 39, 41, 41, 99];
  expect(recursiveSearch(numbers, 0)).toBe(false);
  expect(recursiveSearch(numbers, 9)).toBe(true);
  expect(recursiveSearch(numbers, 10)).toBe(false);
  expect(recursiveSearch(numbers, 16)).toBe(true);
  expect(recursiveSearch(numbers, 41)).toBe(true);
});
