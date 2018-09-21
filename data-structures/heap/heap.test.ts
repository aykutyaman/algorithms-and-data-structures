import {
  heap,
  add,
  isEmpty,
  peek,
  extractRoot
} from './heap';

test('add', () => {
  const compare = () => { }
  const hp = heap([], compare);
  add(hp, 43);
  expect(hp.data).toEqual([43]);
});

test('moves new node, to a proper place', () => {
  const compare = (x, y) => (x - y);
  const hp = heap([71, 19, 35, 12, 4], compare);
  add(hp, 43);
  expect(hp.data).toEqual([71, 19, 43, 12, 4, 35]);
});

test('heapify up to the root', () => {
  const compare = (x, y) => (x - y);
  const hp = heap([44, 42, 35, 33, 31, 19, 27], compare);
  add(hp, 50);
  expect(hp.data).toEqual([50, 44, 35, 42, 31, 19, 27, 33]);
});

test('add items to the heap, and heapify up and down', () => {
  const compare = (x, y) => (x - y);
  const hp = heap([], compare);

  add(hp, 5);
  expect(isEmpty(hp)).toBe(false);
  expect(peek(hp)).toBe(5);
  expect(hp.data).toEqual([5]);

  add(hp, 3);
  expect(peek(hp)).toBe(5);
  expect(hp.data).toEqual([5, 3]);

  add(hp, 10);
  expect(peek(hp)).toBe(10);
  expect(hp.data).toEqual([10, 3, 5]);

  add(hp, 1);
  expect(peek(hp)).toBe(10);
  expect(hp.data).toEqual([10, 3, 5, 1]);

  add(hp, 1);
  expect(peek(hp)).toBe(10);
  expect(hp.data).toEqual([10, 3, 5, 1, 1]);

  expect(extractRoot(hp)).toBe(10);
  expect(hp.data).toEqual([5, 3, 1, 1]);

  expect(extractRoot(hp)).toBe(5);
  expect(hp.data).toEqual([3, 1, 1]);

  expect(extractRoot(hp)).toBe(3);
  expect(hp.data).toEqual([1, 1]);

  expect(extractRoot(hp)).toBe(1);
  expect(hp.data).toEqual([1]);

  expect(extractRoot(hp)).toBe(1);
  expect(hp.data).toEqual([]);
});

test('heapify down through the right branch', () => {
  const compare = (x, y) => (x - y);
  const hp = heap([], compare);

  add(hp, 3);
  add(hp, 12);
  add(hp, 10);

  expect(hp.data).toEqual([12, 3, 10]);

  add(hp, 11);
  expect(hp.data).toEqual([12, 11, 10, 3]);

  expect(extractRoot(hp)).toBe(12);
  expect(hp.data).toEqual([11, 3, 10]);
});
