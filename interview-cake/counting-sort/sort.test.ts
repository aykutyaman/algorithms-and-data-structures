import { sort } from './sort'

test('empty array', () => {
  const given = []
  const expected = []
  expect(sort(given, 0)).toEqual(expected)
})

test('one number', () => {
  const given = [3]
  const expected = [3]
  expect(sort(given, 3)).toEqual(expected)
})

test('multiple numbers 1', () => {
  const given = [1, 5, 3, 1, 9, 2]
  const expected = [1, 1, 2, 3, 5, 9]
  expect(sort(given, 9)).toEqual(expected)
})

test('multiple numbers 2', () => {
  const given = [99, 1, 5, 3, 99, 1, 22, 32, 9, 2]
  const expected = [1, 1, 2, 3, 5, 9, 22, 32, 99, 99]
  expect(sort(given, 99)).toEqual(expected)
})
