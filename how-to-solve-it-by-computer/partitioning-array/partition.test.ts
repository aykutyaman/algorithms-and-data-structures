// http://p-nand-q.com/python/algorithms/sorting/partitioning.html

import { partition } from './partition';

test('partition 2 numbers', () => {
  const given = [16, 13];
  const expected = [13, 16];
  const pivot = 16;
  partition(given, pivot);
  expect(given).toEqual(expected);
});


test('partition 3 numbers', () => {
  const given = [28, 16, 13];
  const expected = [13, 16, 28];
  const pivot = 16;
  partition(given, pivot);
  expect(given).toEqual(expected);
});

test('partition multiple numbers', () => {
  const given = [28, 26, 25, 11, 16, 12, 24, 29, 6, 10];
  const expected = [10, 6, 12, 11, 16, 25, 24, 29, 26, 28];
  const pivot = 16;
  partition(given, pivot);
  expect(given).toEqual(expected);
});

test('move single from left to right', () => {
  const given = [10, 30, 16, 40];
  const expected = [10, 16, 30, 40];
  const pivot = 17;
  partition(given, pivot);
  expect(given).toEqual(expected);
});

const isPartitioned = (arr: number[], pivot: number, partitionIndex: number): Boolean => (
  arr.every((value, index) => (
    (index < partitionIndex)
      ? (value < pivot) // left half
      : (value >= pivot) // right half
  ))
);
test('random input', () => {
  // create 10000 random integers in the range 0..100
  const given = Array(10000).fill(0).map(() => Math.floor(Math.random() * 100));
  const pivot = 50;
  const partitionIndex = partition(given, pivot);
  expect(isPartitioned(given, pivot, partitionIndex)).toBe(true);
});
