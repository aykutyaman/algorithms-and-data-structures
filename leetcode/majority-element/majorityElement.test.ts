import { majorityElement } from './majorityElement';

test('one number', () => {
  const given = [1, 1, 1];
  expect(majorityElement(given)).toBe(1);
});

test('two numbers', () => {
  const given = [2, 2, 1, 1, 1, 2, 2];
  expect(majorityElement(given)).toBe(2);
});

test('multiple numbers sorted', () => {
  const given = [1, 2, 3, 3, 3];
  expect(majorityElement(given)).toBe(3);
});

test('multiple numbers without sort', () => {
  const given = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  expect(majorityElement(given)).toBe(4);
});
