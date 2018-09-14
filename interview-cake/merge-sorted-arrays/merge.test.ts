import { merge } from './merge';

test('two items array', () => {
  expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
});

test('second array runs out of element before merging is done', () => {
  expect(merge([8, 10], [1, 3, 5])).toEqual([1, 3, 5, 8, 10]);
});

test('first array runs out of element before merging is done', () => {
  expect(merge([1, 3], [8, 9, 10])).toEqual([1, 3, 8, 9, 10]);
});

test('one of arrays has 0 element', () => {
  expect(merge([], [2, 4])).toEqual([2, 4]);
});

test('second array has last item greater', () => {
  expect(merge([2, 3], [1, 7])).toEqual([1, 2, 3, 7]);
});

test('arrays have different sizes', () => {
  const expected = [2, 3, 5, 7, 9, 11, 14];
  expect(merge([2, 3, 7, 11, 14], [5, 9])).toEqual(expected);
});

test('complex arrays', () => {
  const a1 = [3, 4, 6, 10, 11, 15, 74, 92];
  const a2 = [-10, 5, 12, 14, 19];
  const expected = [-10, 3, 4, 5, 6, 10, 11, 12, 14, 15, 19, 74, 92];
  expect(merge(a1, a2)).toEqual(expected);
});
