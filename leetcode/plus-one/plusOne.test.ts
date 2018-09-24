// https://bit.ly/2I9ArIl
import { plusOne } from './plusOne';

test('one digit', () => {
  expect(plusOne([0])).toEqual([1]);
  expect(plusOne([1])).toEqual([2]);
  expect(plusOne([9])).toEqual([1, 0]);
});

test('multiple digits', () => {
  expect(plusOne([1, 0])).toEqual([1, 1]);
  expect(plusOne([1, 9])).toEqual([2, 0]);
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  expect(plusOne([1, 9, 9, 9, 9, 9])).toEqual([2, 0, 0, 0, 0, 0]);
});
