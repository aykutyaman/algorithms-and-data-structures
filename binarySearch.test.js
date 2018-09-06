const {
  binarySearchI,
  binarySearchR,
} = require('./binarySearch');

// Iterative
test('binarySearchI empty array', () => {
  const numbers = [];
  expect(binarySearchI(numbers, 1)).toBe(false);
});


test('binarySearchI small array', () => {
  const numbers = [1];
  expect(binarySearchI(numbers, 1)).toBe(true);
  expect(binarySearchI(numbers, 16)).toBe(false);
});

test('binarySearchI with big array', () => {
  const numbers = [1, 3, 9, 16, 29, 39, 41, 41, 99];
  expect(binarySearchI(numbers, 0)).toBe(false);
  expect(binarySearchI(numbers, 16)).toBe(true);
  expect(binarySearchI(numbers, 41)).toBe(true);
});

// Recursive
test('binarySearchR empty array', () => {
  const numbers = [];
  expect(binarySearchR(numbers, 1)).toBe(false);
});

test('binarySearchR small array', () => {
  const numbers = [1];
  expect(binarySearchR(numbers, 1)).toBe(true);
  expect(binarySearchR(numbers, 16)).toBe(false);
});

test('binarySearchR with big array', () => {
  const numbers = [1, 3, 9, 16, 29, 39, 41, 41, 99];
  expect(binarySearchR(numbers, 0)).toBe(false);
  expect(binarySearchR(numbers, 16)).toBe(true);
  expect(binarySearchR(numbers, 41)).toBe(true);
});
