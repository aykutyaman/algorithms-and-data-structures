import {
  heap,
  add
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
