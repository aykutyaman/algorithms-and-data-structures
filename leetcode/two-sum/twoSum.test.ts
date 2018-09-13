import { twoSum } from './twoSum';

describe('twoSum', () => {
  test('empty array', () => {
    expect(twoSum([], 9)).toEqual([-1, -1]);
  });

  test('two numbers', () => {
    expect(twoSum([2, 7], 9)).toEqual([0, 1]);
  });

  test('multiple sorted numbers', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('multiple unsorted numbers', () => {
    expect(twoSum([2, 15, 11, 7], 9)).toEqual([0, 3]);
  });

  test('unsorted numbers in middle', () => {
    expect(twoSum([30, 2, 15, 11, 7, 47], 13)).toEqual([1, 3]);
  });

  test('same element twice', () => {
    expect(twoSum([30, 2, 2, 15, 11, 7, 47], 13)).toEqual([1, 4]);
  });

  test('worst case time complexity - O(n^2)', () => {
    const callback = jest.fn();
    twoSum([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
    ], 0, callback);
    expect(callback).toHaveBeenCalledTimes(22);
  });
});
