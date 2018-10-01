import { intersect } from './intersect';

test('no intersection', () => {
  expect(intersect([3, 5], [9, 4, 9, 8, 4])).toEqual([]);
});

test('one intersection', () => {
  expect(intersect([3], [9, 4, 9, 8, 4, 3])).toEqual([3]);
});

test('same number multiple times', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});

test('first array bigger', () => {
  expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});
