import { highestProduct } from './highestProduct';

test('highestProduct = positive numbers', () => {
  expect(highestProduct([2, 3, 4, 1])).toBe(24)
  expect(highestProduct([1, 2, 3, 4])).toBe(24)
  expect(highestProduct([6, 1, 3, 5, 7, 8, 2])).toBe(336)
  expect(highestProduct([-5, 4, 8, 2, 3])).toBe(96)
  expect(highestProduct([-10, 1, 3, 2, -10])).toBe(300)
  expect(highestProduct([-5, -1, -3, -2])).toBe(-6)
});

test('error with empty array', () => {
  expect(() => {
    highestProduct([])
  }).toThrow()
})
