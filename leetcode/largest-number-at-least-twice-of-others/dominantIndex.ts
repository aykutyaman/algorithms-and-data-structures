const reducer = (acc, n, i) => {
  if (n > acc.largest.val) {
    acc.second = acc.largest.val;
    acc.largest.val = n;
    acc.largest.index = i;
  } else if (n > acc.second) {
    acc.second = n;
  }
  return acc;
}

const dominantIndex = (numbers: number[]): number => {
  if (numbers.length == 1) {
    return 0;
  }
  const reduced = numbers.reduce(reducer, {
    largest: { val: 0, index: 0 }, second: 0
  });
  return (reduced.largest.val >= (reduced.second * 2))
    ? reduced.largest.index
    : -1;
}

export {
  dominantIndex
}
