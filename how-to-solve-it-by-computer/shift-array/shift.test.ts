import {
  shift,
  rotate
} from './shift';

test('multiple items', () => {
  const given = [1, 2, 3, 4, 5, 6, 7];
  const expected = [3, 4, 5, 6, 7, 1, 2];
  const key = 2;
  shift(given, key);
  expect(given).toEqual(expected);
});

test('rotate by one', () => {
  const given = [0, 1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5, 0];
  expect(rotate(given)).toEqual(expected);
});

// TODO: more tests
