interface ITrie {
  fullWord: string,
  children: Map<string, any> // TODO: What is proper type?
}

const Trie = (fullWord = '', children = new Map()): ITrie => ({
  fullWord,
  children
})

const dump = (trie: ITrie) => JSON.parse(JSON.stringify(trie)) // hack:remove Map name

const fullWord = (i, array) => (
  (i === array.length - 1)
    ? array.join('')
    : ''
)

const reducer = (
  trie: ITrie, letter: string, i: number, array: string[]
): ITrie => {
  trie.children[letter] = trie.children[letter] || Trie()

  const full = fullWord(i, array)
  if (full !== '') {
    trie.children[letter].fullWord = full;
  }
  return trie.children[letter];
}

const add = (word: string) => (trie: ITrie): ITrie => (
  word.split('').reduce(reducer, trie) && trie // ugly! cannot return reduce result
)

const has = (word: string) => (trie: ITrie): Boolean => {
  let temp = trie
  for (let i = 0; i < word.length; i++) {
    if (!temp.children[word[i]]) {
      return false
    }
    temp = temp.children[word[i]]
  }
  return (temp !== null) && (temp.fullWord === word)
}

export {
  Trie,
  dump,
  add,
  has
}

// remove = (word: string) => (trie: ITrie): ITrie => ()
