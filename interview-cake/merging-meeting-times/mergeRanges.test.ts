import { mergeRanges } from './mergeRanges';

test('meeting overlap', () => {
  let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
  let expected = [{ startTime: 1, endTime: 4 }];
  expect(actual).toEqual(expected);
});

test('meeting touch', () => {
  let actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
  let expected = [{ startTime: 5, endTime: 8 }];
  expect(actual).toEqual(expected);
});

test('meeting contains other meeting', () => {
  let actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
  let expected = [{ startTime: 1, endTime: 8 }];
  expect(actual).toEqual(expected);
});

test('meeting stay separate', () => {
  let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
  let expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
  expect(actual).toEqual(expected);
});

test('multiple merged meetings', () => {
  let actual = mergeRanges([
    { startTime: 1, endTime: 4 },
    { startTime: 2, endTime: 5 },
    { startTime: 5, endTime: 8 }
  ]);
  let expected = [{ startTime: 1, endTime: 8 }];
  expect(actual).toEqual(expected);
});

test('meetings not sorted', () => {
  let actual = mergeRanges([
    { startTime: 5, endTime: 8 },
    { startTime: 1, endTime: 4 },
    { startTime: 6, endTime: 8 },
  ]);
  let expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
  expect(actual).toEqual(expected);
});

test('one long meeting containing smaller meetings', () => {
  const actual = mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 5 },
    { startTime: 6, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 }
  ]);
  const expected = [{ startTime: 1, endTime: 12 }];
  expect(actual).toEqual(expected);
});

test('sample input', () => {
  const actual = mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ]);
  const expected = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ];
  expect(actual).toEqual(expected);
});
