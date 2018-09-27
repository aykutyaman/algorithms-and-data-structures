// https://www.geeksforgeeks.org/array-rotation/
const shiftInPlace = (items: any[], k: number): void => {
  let currentIndex = 0;
  let newIndex = 0;
  let temp = items[currentIndex];
  let newVal = items[currentIndex];
  let i = 0;
  let arrayLen = items.length;

  while (i < arrayLen) {
    currentIndex = newIndex;

    // find newIndex index
    newIndex = (arrayLen - (k % arrayLen) + currentIndex) % arrayLen;

    temp = items[newIndex];

    items[newIndex] = newVal;

    newVal = temp;
    i++;
  }
}

// compute the new index of the current one
const nextIndex = (i: number, k: number, length: number): number => (
  (i + k) % length
)
const shift = (arr: number[], k: number) => (
  arr.map((item, i, a) => (a[nextIndex(i, k, a.length)]))
)

export {
  shiftInPlace,
  shift
}
