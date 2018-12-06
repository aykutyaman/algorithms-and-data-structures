import { shuffle } from './shuffle'

test('shuffle', () => {
  const arr = [1, 2, 3, 4, 5]
  console.log('initial array: ', arr)
  shuffle(arr)
  console.log('shuffled array: ', arr)
})
