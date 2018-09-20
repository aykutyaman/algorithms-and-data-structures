import {
  insert,
  node,
  traverseInOrder,
  traversePreOrder,
  traversePostOrder
} from './tree';

describe('node', () => {
  test('value', () => {
    const n1 = node(21);
    expect(n1.value).toBe(21);
    expect(n1.left).toBe(null);
    expect(n1.right).toBe(null);
  });
});

describe('insert', () => {
  test('single node to left', () => {
    const root = node(21);
    insert(root, node(19));
    expect(root.left.value).toBe(19);
  });

  test('single node to right', () => {
    const root = node(21);
    insert(root, node(23));
    expect(root.right.value).toBe(23);
  });

  test('2 level deep to left', () => {
    const root = node(21);
    insert(root, node(19));
    insert(root, node(17))
    expect(root.left.left.value).toBe(17);
  });

  test('2 level deep to right', () => {
    const root = node(21);
    insert(root, node(23));
    insert(root, node(25));
    expect(root.right.right.value).toBe(25);
  });
});

describe('traverseInOrder', () => {
  test('three nodes', () => {
    const root = node(21);
    insert(root, node(19));
    insert(root, node(25));

    const visitor = population => node => population.push(node.value);
    const population = [];
    traverseInOrder(root, visitor(population));
    expect(population).toEqual([19, 21, 25]);
  });

  test('multiple nodes, three level, balanced', () => {
    const root = node(21);
    insert(root, node(19));
    insert(root, node(25));
    insert(root, node(15));
    insert(root, node(20));
    insert(root, node(23));
    insert(root, node(27));
    const population = [];
    const visitor = population => node => population.push(node.value);
    traverseInOrder(root, visitor(population));
    expect(population).toEqual([15, 19, 20, 21, 23, 25, 27]);
  });

  test('multiple nodes, three level, unbalanced to right', () => {
    const root = node(15);
    insert(root, node(19));
    insert(root, node(20));
    insert(root, node(21));
    insert(root, node(23));
    insert(root, node(25));
    insert(root, node(27));
    const population = [];
    const visitor = population => node => population.push(node.value);
    traverseInOrder(root, visitor(population));
    expect(population).toEqual([15, 19, 20, 21, 23, 25, 27]);
  });
});

describe('traversePreOrder', () => {
  test('multiple nodes, balanced tree', () => {
    const root = node(21);
    insert(root, node(19));
    insert(root, node(25));
    insert(root, node(15));
    insert(root, node(20));
    insert(root, node(23));
    insert(root, node(27));
    const population = [];
    const visitor = population => node => population.push(node.value);
    traversePreOrder(root, visitor(population));
    expect(population).toEqual([21, 19, 15, 20, 25, 23, 27]);
  });
});

describe('traversePostOrder', () => {
  test('multiple nodes, balanced tree', () => {
    const root = node(21);
    insert(root, node(19));
    insert(root, node(25));
    insert(root, node(15));
    insert(root, node(20));
    insert(root, node(23));
    insert(root, node(27));
    const population = [];
    const visitor = population => node => population.push(node.value);
    traversePostOrder(root, visitor(population));
    expect(population).toEqual([15, 20, 19, 23, 27, 25, 21]);
  });
});
