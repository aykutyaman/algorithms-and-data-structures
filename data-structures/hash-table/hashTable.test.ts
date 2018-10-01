import {
  makeHash,
  hashSet,
  hashGet,
  hashCode
} from './hashTable';

test('should create hash table with default size', () => {
  const h1 = makeHash();
  expect(h1.buckets.length).toBe(32);

  const h2 = makeHash(64);
  expect(h2.buckets.length).toBe(64);
});

test('should set', () => {
  const h = makeHash();

  hashSet(h, 'a', 'earth');
  expect(hashGet(h, 'a')).toBe('earth');
});

test('generate proper hash for specified keys', () => {
  const hash = makeHash();

  expect(hashCode(hash, 'a')).toBe(1);
  expect(hashCode(hash, 'b')).toBe(2);
  expect(hashCode(hash, 'abc')).toBe(6);
});

// TODO: set, read and delete data with collisions
// TODO: add objects to hash table
// TODO: track actual keys
