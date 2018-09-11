const swap = (array, start, end) => {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}

const partition = (
  array: number[], start: number, end: number, callback?: Function
): number => {
  const pivot = array[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (callback) callback(pivot);
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex = pIndex + 1;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
}

const _quicksort = (
  array: number[], start: number, end: number, callback?: Function
): void => {
  if (start < end) {
    let pIndex = partition(array, start, end, callback);
    _quicksort(array, start, pIndex - 1, callback);
    _quicksort(array, pIndex + 1, end, callback);
  }
}

const quicksort = (array: number[], callback?: Function): void => {
  _quicksort(array, 0, array.length - 1, callback);
}

export {
  partition,
  swap,
  quicksort,
}
