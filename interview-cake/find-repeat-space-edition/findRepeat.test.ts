import { findRepeat } from './findRepeat'

describe('findRepeat', () => {
  test('just the repeated number', () => {
    expect(findRepeat([1, 1])).toBe(1)
  })
  test('short array', () => {
    expect(findRepeat([1, 2, 3, 2])).toBe(2)
  })
  test('medium array', () => {
    expect(findRepeat([1, 3, 9, 8, 10, 8, 8, 8, 2])).toBe(8)
  })
  test('long array', () => {
    expect(findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5])).toBe(4)
  })
})
