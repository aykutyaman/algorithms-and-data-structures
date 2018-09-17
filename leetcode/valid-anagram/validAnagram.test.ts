import { validAnagram } from './validAnagram';

test('seven character', () => {
  const s = 'anagram';
  const t = 'nagaram';
  expect(validAnagram(s, t)).toBe(true);
});

test('three character false', () => {
  const s = 'rat';
  const t = 'car';
  expect(validAnagram(s, t)).toBe(false);
});
