import { singleNumber } from './singleNumber';

describe('singleNumber', () => {
  test('two numbers', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test('three numbers', () => {
    expect(singleNumber([3, 2, 7, 3, 2])).toBe(7);
  });

  test('lots of numbers', () => {
    const input = [92, -2, 19, 3, 2, 34, 7, 3, 2, 19, -2, 34, 92];
    expect(singleNumber(input)).toBe(7);
  });
});
