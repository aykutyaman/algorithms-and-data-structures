// TODO: use a custom implementation for permutation and combination
const permutation = require('array-permutation-simple');
const Combinatorics = require('js-combinatorics');

const { combination } = Combinatorics;

const isSolution = (p) => {
  let a;
  const c = combination([...Array(p.length).keys()], 2);
  while (a = c.next()) { // eslint-disable-line
    const [i1, i2] = a;
    if (Math.abs(i1 - i2) === Math.abs(p[i1] - p[i2])) {
      return false;
    }
  }
  return true;
};

const reducer = (acc, p) => (isSolution(p) ? acc.concat([p]) : acc);

const nQueens = (a) => {
  const permutations = permutation(a);
  return permutations.reduce(reducer, []);
};

export default nQueens;
