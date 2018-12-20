import { insertionSort } from './insertionSort'

describe('insertionSort', () => {
  test('two items', () => {
    expect(insertionSort([2, 1])).toEqual([1, 2])
  })
  test('three items', () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3])
  })
  test('more items', () => {
    expect(insertionSort([1, 3, 5, 4, 2])).toEqual([1, 2, 3, 4, 5])
  })
  test('with negatives', () => {
    expect(insertionSort([3, 1, -2, 5, -1])).toEqual([-2, -1, 1, 3, 5])
  })
  test('short array', () => {
    expect(insertionSort([5, 2, 1, 3, 4])).toEqual([1, 2, 3, 4, 5])
  })
})
