const head = ([x]): number => x;
const tail = ([, ...xs]) => xs;


// xs can have maximum 3 elements
const highestReducer = (x, xs) => {
  // return new xs
  const copy = [...xs].sort((x, y) => y - x);
  copy[2] = x > copy[2] ? x : copy[2];
  return copy;
}

const highest3 = (arr, result) => (
  arr.length === 0
    ? result
    : highest3(tail(arr), highestReducer(head(arr), result))
)

const makeHighest = (arr) => ([arr[0], arr[1], arr[2]]);
const highestProduct = (arr: [number]) => {
  // find highest 3 numbers
  return highest3(arr, makeHighest(arr));

  // find lowest 2 numbers

  // return highest product with highest 3 and lowest 2

  return 24;
}

export {
  highestProduct
}
