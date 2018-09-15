// https://leetcode.com/problems/reverse-integer/description/

import {
  reverseInteger,
} from './reverse';

describe('reverseInteger', () => {
  test('simple', () => {
    expect(reverseInteger(123)).toBe(321);
  });
  test('negative', () => {
    expect(reverseInteger(-123)).toBe(-321);
  });
  test('with zero ending', () => {
    expect(reverseInteger(120)).toBe(21);
  });
  test('very big', () => {
    expect(reverseInteger(1534236469)).toBe(0);
  });
});
