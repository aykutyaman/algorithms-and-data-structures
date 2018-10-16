import { topScores } from './topScores';

// TODO: more tests
test('topScores', () => {
  const highestPossibleValue = 10;
  const given = [3, 8, 4, 3];
  const expected = [8, 4, 3, 3];
  expect(topScores(given, highestPossibleValue)).toEqual(expected);
});
