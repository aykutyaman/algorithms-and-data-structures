import {
  Trie,
  dump,
  add,
  has
} from './trie'

test('root node', () => {
  let trie = Trie()
  const expected = {
    fullWord: '',
    children: {}
  }
  expect(dump(trie)).toEqual(expected)
})

test('add word', () => {
  let trie = Trie()
  trie = add('cat')(trie)
  const expected = {
    fullWord: '',
    children: {
      c: {
        fullWord: '',
        children: {
          a: {
            fullWord: '',
            children: {
              t: {
                fullWord: 'cat',
                children: {}
              }
            }
          }
        }
      }
    }
  }
  expect(dump(trie)).toEqual(expected)
})

test('add two words', () => {
  let trie = Trie()
  trie = add('cat')(trie)
  trie = add('car')(trie)
  //const expected = JSON.stringify({
  const expected = {
    fullWord: '',
    children: {
      c: {
        fullWord: '',
        children: {
          a: {
            fullWord: '',
            children: {
              t: {
                fullWord: 'cat',
                children: {}
              },
              r: {
                fullWord: 'car',
                children: {}
              }
            }
          },
        }
      }
    }
  }
  expect(dump(trie)).toEqual(expected)
})

test('has', () => {
  const trie = Trie()
  add('cat')(trie)
  add('cats')(trie)
  add('carpet')(trie)
  add('car')(trie)
  add('caption')(trie)

  expect(has('cat')(trie)).toBe(true)
  expect(has('cats')(trie)).toBe(true)
  expect(has('carpet')(trie)).toBe(true)
  expect(has('car')(trie)).toBe(true)
})
