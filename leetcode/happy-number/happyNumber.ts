// https://leetcode.com/problems/happy-number/description/

const happyNumberR = (n: number, map): boolean => {
  if (n === 1 || map.get(n)) {
    return (n === 1) ? true : false;
  }
  return map.set(n, n)
    && happyNumberR(squareRoot(findDigits(n)), map);
}

const findDigits = (n: number): number[] => (
  String(n).split('').map(s => Number(s))
)

const squareRoot = (numbers: number[]): number => (
  numbers.reduce((acc, n) => acc + (n * n), 0)
)

const happyNumber = arr => (
  happyNumberR(arr, new Map())
)

export {
  happyNumber,
  findDigits,
  squareRoot
}
