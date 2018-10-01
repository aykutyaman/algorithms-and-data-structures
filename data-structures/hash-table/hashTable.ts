interface Hash {
  buckets: any[],
}

// create a hash table where keys and values are stored
const makeHash = (hashTableSize = 32): Hash => ({
  buckets: Array(hashTableSize).fill(null),
});

// map `key` to `value`, overriting any existing mapping for `key`
const hashSet = (hash: Hash, key, value): void => (
  hash.buckets[hashCode(hash, key)] = value
)

// returns the value for `lookupKey` in `hash`
const hashGet = (hash: Hash, lookupKey): any => (
  hash.buckets[hashCode(hash, lookupKey)]
)

const hashReducer = (acc: number, keySymbol: string): number => (
  acc + keySymbol.charCodeAt(0)
)
// converts key to hash number
const hashCode = (hash: Hash, key): number => (
  // character sum of all characters of the key
  // TODO: left-hand-side aritmetic type error on Array
  Array.from(key).reduce(hashReducer, 0) % hash.buckets.length
)

export {
  makeHash,
  hashSet,
  hashGet,
  hashCode
}
