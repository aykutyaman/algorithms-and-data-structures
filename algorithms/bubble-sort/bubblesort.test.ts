import { bubblesort } from './bubblesort'

describe('bubblesort', () => {
  test('one item', () => {
    expect(bubblesort([1])).toEqual([1])
  })
  test('two items', () => {
    expect(bubblesort([2, 1])).toEqual([1, 2])
  })
  test('three items', () => {
    expect(bubblesort([3, 2, 1])).toEqual([1, 2, 3])
  })
  test('more items', () => {
    expect(bubblesort([1, 3, 5, 4, 2])).toEqual([1, 2, 3, 4, 5])
  })
  test('with negatives', () => {
    expect(bubblesort([3, 1, -2, 5, -1])).toEqual([-2, -1, 1, 3, 5])
  })
})
