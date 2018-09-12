import { reverse } from './reverse';

test('empty string', () => {
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  expect(actual).toBe(expected);
});

test('single character string', () => {
  let input = 'A'.split('');
  reverse(input);
  let actual = input.join('');
  let expected = 'A';
  expect(actual).toBe(expected);
});

test('longer string', () => {
  let input = 'AB'.split('');
  reverse(input);
  let actual = input.join('');
  let expected = 'BA';
  expect(actual).toBe(expected);
});

test('longer string', () => {
  let input = 'ABC'.split('');
  reverse(input);
  let actual = input.join('');
  let expected = 'CBA';
  expect(actual).toBe(expected);
});

test('longer string', () => {
  let input = 'ABCD'.split('');
  reverse(input);
  let actual = input.join('');
  let expected = 'DCBA';
  expect(actual).toBe(expected);
});

test('longer string', () => {
  let input = 'ABCDE'.split('');
  reverse(input);
  let actual = input.join('');
  let expected = 'EDCBA';
  expect(actual).toBe(expected);
});
