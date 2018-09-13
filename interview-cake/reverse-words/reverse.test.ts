import { reverseCharacters, reverseWords } from './reverse';

describe('reverseCharacters', () => {
  test('single word', () => {
    let input = 'hello'.split('');
    reverseCharacters(input, 0, input.length - 1);
    let actual = input.join('');
    let expected = 'olleh';
    expect(actual).toBe(expected);
  });
});

describe('reverse', () => {
  test('empty string', () => {
    let input = ''.split('');
    reverseWords(input)
    let actual = input.join('');
    let expected = '';
    expect(actual).toBe(expected);
  });

  test('two words', () => {
    let input = 'world hello'.split('');
    reverseWords(input)
    let actual = input.join('');
    let expected = 'hello world';
    expect(actual).toBe(expected);
  });

  test('three words', () => {
    let input = 'one another get'.split('');
    reverseWords(input)
    let actual = input.join('');
    let expected = 'get another one';
    expect(actual).toBe(expected);
  });

  test('multiple words same length', () => {
    let input = 'rat the ate cat the'.split('');
    reverseWords(input)
    let actual = input.join('');
    let expected = 'the cat ate the rat';
    expect(actual).toBe(expected);
  });

  test('multiple words different length', () => {
    let input = 'yummy is cake bundt chocolate'.split('');
    reverseWords(input)
    let actual = input.join('');
    let expected = 'chocolate bundt cake is yummy';
    expect(actual).toBe(expected);
  });
});
