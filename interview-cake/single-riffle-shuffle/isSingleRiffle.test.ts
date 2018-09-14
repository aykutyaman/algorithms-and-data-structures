import { isSingleRiffle } from './isSingleRiffle';

test('simple deck, single riffle ordered', () => {
  const half1 = [1, 2];
  const half2 = [3, 4];
  const deck = [1, 2, 3, 4];
  expect(isSingleRiffle(half1, half2, deck)).toBe(true);
});

test('simple deck, single riffle unordered', () => {
  const half1 = [1, 2];
  const half2 = [3, 4];
  const deck = [1, 3, 4, 2];
  expect(isSingleRiffle(half1, half2, deck)).toBe(true);
});

test('simple deck, second half first', () => {
  const half1 = [1, 2];
  const half2 = [3, 4];
  const deck = [3, 4, 1, 2];
  expect(isSingleRiffle(half1, half2, deck)).toBe(true);
});

test('simple deck, is not single riffle', () => {
  const half1 = [1, 2];
  const half2 = [3, 4];
  const deck = [1, 4, 2, 3];
  expect(isSingleRiffle(half1, half2, deck)).toBe(false);
});

test('complex deck, single riffle true', () => {
  const half1 = [1, 2, 3, 4, 5, 6];
  const half2 = [7, 8, 9, 10, 11, 12];
  const deck = [1, 7, 8, 2, 3, 9, 4, 5, 10, 11, 12, 6];
  expect(isSingleRiffle(half1, half2, deck)).toBe(true);
});

test('complex deck, single riffle false', () => {
  const half1 = [1, 2, 3, 4, 5, 6];
  const half2 = [7, 8, 9, 10, 11, 12];
  const deck = [1, 7, 8, 2, 6, 3, 9, 4, 5, 10, 11, 12];
  expect(isSingleRiffle(half1, half2, deck)).toBe(false);
});
