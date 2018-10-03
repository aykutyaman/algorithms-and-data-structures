import { wordCloud, toArray } from './wordCloud';

test('empty string', () => {
  const expected = new Map();
  expect(wordCloud('')).toEqual(expected);
});

test('one word', () => {
  const expected = new Map([['hello', 1]]);
  expect(wordCloud('hello')).toEqual(expected);
});

test('two words', () => {
  const expected = new Map([['hello', 1], ['world', 1]]);
  expect(wordCloud('hello world')).toEqual(expected);
});

test('one word multiple times', () => {
  const expected = new Map([['hello', 2]]);
  expect(wordCloud('hello hello')).toEqual(expected);
});

test('one word multiple times, with other words', () => {
  const expected = new Map([['hello', 2], ['world', 1]]);
  expect(wordCloud('hello world hello')).toEqual(expected);
});

test('one word multiple times, with punctuation', () => {
  const expected = new Map([['hello', 1], ['world', 1]]);
  expect(wordCloud('hello, world')).toEqual(expected);
});

// TODO: test one word with with punctuation at the end
