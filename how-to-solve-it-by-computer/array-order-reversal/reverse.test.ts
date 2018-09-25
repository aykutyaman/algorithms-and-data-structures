import { reverse } from './reverse';

test('empty array', () => {
  const given = [];
  reverse(given);
  expect(given).toEqual([]);
});

test('one element', () => {
  const given = [1];
  reverse(given);
  expect(given).toEqual([1]);
});

test('two elements', () => {
  const given = [1, 2];
  reverse(given);
  expect(given).toEqual([2, 1]);
});

test('three elements', () => {
  const given = [1, 2, 3];
  reverse(given);
  expect(given).toEqual([3, 2, 1]);
});

test('four elements', () => {
  const given = [1, 2, 3, 4];
  reverse(given);
  expect(given).toEqual([4, 3, 2, 1]);
});
