import {
  Trie,
  dump,
  add,
  getChild
} from './trie'

test('root node', () => {
  let trie = Trie()
  const expected = JSON.stringify({
    letter: '',
    fullWord: '',
    children: {}
  })
  expect(dump(trie)).toEqual(expected)
})

test('add words', () => {
  let trie = Trie()
  trie = add('cat')(trie)
  const expected = JSON.stringify({
    letter: 'c',
    fullWord: '',
    children: {
      letter: 'a',
      fullWord: '',
      children: {
        letter: 't',
        fullWord: 'cat',
        children: {}
      }
    }
  })
  // expect(dump(trie)).toEqual(expected)
})
