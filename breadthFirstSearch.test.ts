import { breadthFirstSearch } from './breadthFirstSearch';

test('breadthFirstSearch finds mangoSeller', () => {
  const graph = {
    you: ['bob', 'claire', 'alice'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['thom', 'jonny'],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
  }
  const source = 'you';
  const mangoSeller = (person: string) => person[person.length - 1] === 'm';
  const visited = ['you', 'bob', 'claire', 'alice', 'anuj', 'peggy', 'thom'];
  expect(breadthFirstSearch(graph, source, mangoSeller)).toEqual({ ok: true, node: 'thom', visited });
});

test('breadthFirstSearch do not check, visit already visited nodes', () => {
  const graph = {
    you: ['claire', 'anuj'],
    claire: ['anuj'],
    anuj: [],
  }
  const source = 'you';
  const mangoSeller = (person: string) => person === 'aykut';
  const visited = ['you', 'claire', 'anuj'];
  expect(breadthFirstSearch(graph, source, mangoSeller)).toEqual({ ok: false, node: null, visited });
});
