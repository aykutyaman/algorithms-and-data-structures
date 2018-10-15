import { highestProduct } from './highestProduct';

test('highestProduct', () => {
  // expect(highestProduct([1, 2, 3, 4])).toBe(24);
  expect(highestProduct([-1, -3, -4, -99])).toBe(24);
});
