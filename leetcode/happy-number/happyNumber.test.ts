import {
  happyNumber,
  findDigits,
  squareRoot
} from './happyNumber';

test('simple number', () => {
  expect(happyNumber(1)).toBe(true);
  expect(happyNumber(1)).toBe(true);
  expect(happyNumber(7)).toBe(true);
  expect(happyNumber(10)).toBe(true);
  expect(happyNumber(13)).toBe(true);
  expect(happyNumber(19)).toBe(true);
  expect(happyNumber(68)).toBe(true);
  expect(happyNumber(97)).toBe(true);
  expect(happyNumber(139)).toBe(true);
  expect(happyNumber(7839)).toBe(true);

  expect(happyNumber(12)).toBe(false);
  expect(happyNumber(43)).toBe(false);
  expect(happyNumber(88)).toBe(false);
  expect(happyNumber(128)).toBe(false);

  const big = 111111111111198;
  expect(happyNumber(big)).toBe(false);
});

test('findDigits', () => {
  expect(findDigits(19)).toEqual([1, 9]);
  expect(findDigits(21099)).toEqual([2, 1, 0, 9, 9]);
});

test('squareRoot', () => {
  expect(squareRoot([1, 9, 0])).toBe(82);
  expect(squareRoot([0, 8, 0])).toBe(64);
  expect(squareRoot([5, 0])).toBe(25);
  expect(squareRoot([1])).toBe(1);
});
