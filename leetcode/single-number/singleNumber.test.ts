import { singleNumber } from './singleNumber';

test('single number', () => {
  expect(singleNumber([1])).toBe(1);
});

test('two numbers', () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
});

test('multiple numbers', () => {
  expect(singleNumber([2, 3, 1, 2, 3])).toBe(1);
});
