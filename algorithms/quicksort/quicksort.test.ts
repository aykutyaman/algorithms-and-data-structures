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
