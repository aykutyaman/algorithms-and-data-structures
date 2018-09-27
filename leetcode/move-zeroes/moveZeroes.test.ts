import { moveZeroes } from './moveZeroes';

test('no zeros, one number', () => {
  const given = [1];
  moveZeroes(given);
  expect(given).toEqual([1]);
});

test('no zeros, multiple numbers', () => {
  const given = [1, 3];
  moveZeroes(given);
  expect(given).toEqual([1, 3]);
});

test('with one zero', () => {
  const given = [0, 1, 3];
  moveZeroes(given);
  expect(given).toEqual([1, 3, 0]);
});

test('with two zeros', () => {
  const given = [0, 0, 3, 4];
  moveZeroes(given);
  expect(given).toEqual([3, 4, 0, 0]);
});

test('with two zeros randomly placed', () => {
  const given = [0, 7, 0, 8, 9, 0, 5, 3, 0, 4, 0];
  moveZeroes(given);
  expect(given).toEqual([7, 8, 9, 5, 3, 4, 0, 0, 0, 0, 0]);
});
