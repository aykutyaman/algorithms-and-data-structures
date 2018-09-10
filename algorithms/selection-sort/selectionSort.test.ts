import { selectionSort } from './selectionSort'

describe('selectionSort', () => {
  test('empty', () => {
    expect(selectionSort([]).sorted).toEqual([]);
  });

  test('one or two elements', () => {
    expect(selectionSort([1]).sorted).toEqual([1]);
    expect(selectionSort([2, 1]).sorted).toEqual([1, 2]);
    expect(selectionSort([1, 2]).sorted).toEqual([1, 2]);

  });

  test('more than two elements', () => {
    expect(selectionSort([5, 7, 9]).sorted).toEqual([5, 7, 9]);
    expect(selectionSort([7, 5, 9]).sorted).toEqual([5, 7, 9]);
    expect(selectionSort([7, 5, 3, 9, 1]).sorted).toEqual([1, 3, 5, 7, 9]);
    expect(selectionSort([5, 4, 3, 2, 1]).sorted).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, -2099]).sorted).toEqual([-2099, 2, 3, 4, 5]);
  });

  test('dublicate elements', () => {
    expect(selectionSort([7, 5, 9, 5]).sorted).toEqual([5, 5, 7, 9]);
  });

  test('time complexity', () => {
    const nSquared = 15;
    const f = jest.fn();
    selectionSort([5, 4, 3, 2, 1], f);
    expect(f).toHaveBeenCalledTimes(nSquared);
  });
});
