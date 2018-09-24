// Given a set of n students' examination marks (in the range 0 to 100) make a count
// of the number of students that obtained each possible mark.

import { frequency } from './frequency';

test('one mark', () => {
  const given = [11];
  expect(frequency(given)[11]).toEqual(1);
});

test('two marks', () => {
  const given = [11, 22];
  expect(frequency(given)[11]).toEqual(1);
  expect(frequency(given)[22]).toEqual(1);
});

test('multiple marks', () => {
  const given = [100, 11, 22, 11, 32, 32, 11, 100, 100, 100, 0];
  expect(frequency(given)[77]).toEqual(0);
  expect(frequency(given)[0]).toEqual(1);
  expect(frequency(given)[11]).toEqual(3);
  expect(frequency(given)[22]).toEqual(1);
  expect(frequency(given)[32]).toEqual(2);
  expect(frequency(given)[100]).toEqual(4);
});
