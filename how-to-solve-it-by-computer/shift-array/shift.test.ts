import {
  shiftInPlace,
  shift
} from './shift';

test('inplace', () => {
  const given = [1, 2, 3, 4, 5, 6, 7];
  const expected = [3, 4, 5, 6, 7, 1, 2];
  const key = 2;
  shiftInPlace(given, key);
  expect(given).toEqual(expected);
});

test('shift by one', () => {
  const given = [0, 1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5, 0];
  const pivot = 1;
  expect(shift(given, pivot)).toEqual(expected);
});

test('shift by two', () => {
  const given = [0, 1, 2, 3, 4, 5];
  const expected = [2, 3, 4, 5, 0, 1];
  const pivot = 2;
  expect(shift(given, pivot)).toEqual(expected);
});
// TODO: more tests
