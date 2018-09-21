interface ITrie {
  letter: string,
  fullWord: string,
  children: Map<string, any> // TODO: What is proper type?
}

const Trie = (letter = '', fullWord = '', children = new Map()): ITrie => ({
  letter,
  fullWord,
  children
})

const dump = (trie: ITrie) => JSON.stringify(trie)

const reducer = (acc: ITrie, char: string) => acc

const add = (word: string) => (trie: ITrie): ITrie => (
  word.split('').reduce(reducer, trie)
)

const getChild = (char: string) => (trie: ITrie): ITrie => (
  trie.children.has(char)
    ? trie.children.get(char)
    : null
)

export {
  Trie,
  dump,
  add,
  getChild
}



// remove = (word: string) => (trie: ITrie): ITrie => ()
// lookup = (word: string) => (trie: ITrie): Boolean => ()
