const reducer = (map, char) => (
  map.has(char)
    ? map.delete(char)
    : map.set(char, 1)
) && map;

const hasPalindromePermutation = (message: string, map = new Map()): Boolean => (
  Array.from(message).reduce(reducer, map).size <= 1
)

export {
  hasPalindromePermutation
}
