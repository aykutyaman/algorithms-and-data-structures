const swap = (array, start, end) => {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}

const partition = (
  array: number[], start: number, end: number
): number => {
  const pivot = array[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex = pIndex + 1;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
}

const quicksort = (
  array: number[], start: number = 0, end: number = array.length - 1
): void => {
  if (start < end) {
    let pIndex = partition(array, start, end);
    quicksort(array, start, pIndex - 1);
    quicksort(array, pIndex + 1, end);
  }
}

export {
  partition,
  swap,
  quicksort
}
