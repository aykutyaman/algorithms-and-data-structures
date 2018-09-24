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
