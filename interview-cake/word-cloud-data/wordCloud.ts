const wordCount = (map, word) => (
  map.has(word)
    ? map.get(word) + 1
    : 1
)

// split one or more non-word characters
const toArray = (message) => {
  if (message === '') return [];
  return message.split(/\W+/g);
}

// TODO: make an map iterface for return object
const wordCloud = (message: string, map = new Map()): object => {
  toArray(message).forEach(word => map.set(word, wordCount(map, word)));
  return map;
}

export {
  wordCloud,
  toArray
}
