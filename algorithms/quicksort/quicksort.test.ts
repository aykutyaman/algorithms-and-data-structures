import {
  partition, swap, quicksort
} from './quicksort';

describe('partition', () => {
  test('works with whole array', () => {
    const array = [7, 2, 1, 6, 8, 5, 3, 4];
    const expected = [2, 1, 3, 4, 8, 5, 7, 6];
    expect(partition(array, 0, 7)).toEqual(3);
    expect(array).toEqual(expected);
  });

  test('works with right partial array', () => {
    const array = [2, 1, 3, 4, 8, 5, 7, 6];
    const expected = [2, 1, 3, 4, 5, 6, 7, 8];
    expect(partition(array, 3, 7)).toEqual(5);
    expect(array).toEqual(expected);
  });

  test('works with left partial array', () => {
    const array = [2, 1, 3, 4, 8, 5, 7, 6];
    const expected = [1, 2, 3, 4, 8, 5, 7, 6];
    expect(partition(array, 0, 1)).toEqual(0);
    expect(array).toEqual(expected);
  });

  test('works with middle partial array', () => {
    const array = [2, 1, 3, 4, 8, 5, 7, 6];
    const expected = [2, 1, 3, 4, 5, 8, 7, 6];
    expect(partition(array, 2, 5)).toEqual(4);
    expect(array).toEqual(expected);
  });
});

describe('swap', () => {
  test('works with simple arrays', () => {
    const array = [2, 4];
    swap(array, 0, 1);
    expect(array).toEqual([4, 2]);
  });
  test('works with complex arrays', () => {
    const array = [2, 1, 3, 4, 8, 5, 7, 6];
    const expected = [2, 1, 3, 5, 8, 4, 7, 6];
    swap(array, 3, 5);
    expect(array).toEqual(expected);
  });
});

describe('quicksort', () => {
  test('sorts simple arrays', () => {
    const array = [2, 1, 3, 4, 8, 5, 7, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    quicksort(array);
    expect(array).toEqual(expected);
  });

});

// https://bit.ly/2N5IFan
describe('time complexities', () => {
  // best case occurs generally when the list is in completly random manner
  test('randomly mixed data - Ω(n log(n)) and Θ(n log(n))', () => {
    const f = jest.fn();
    const array = [1, 9, 99, 13, 3, 11, 3, 15, 2, 20, 6, 14, 4, 12, 8, 16];
    quicksort(array, f);
    expect(f).toHaveBeenCalledTimes(48);
  });

  // Worst case occurs when the array is already sorted either in ascending or descending order.
  test('already sorted in descending order - O(n^2) ', () => {
    const f = jest.fn();
    const array = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    quicksort(array, f);
    expect(f).toHaveBeenCalledTimes(120);
  });

  // Worst case occurs when the array is already sorted either in ascending or descending order.
  test('already sorted in ascending order - O(n^2)', () => {
    const f = jest.fn();
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    quicksort(array, f);
    expect(f).toHaveBeenCalledTimes(120);
  });

});
