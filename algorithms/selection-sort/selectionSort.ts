const selectionSort = (
  array: number[], callback?: Function
): { ok: Boolean, sorted: number[] } => {
  // clone original array to prevent the modification
  const sorted = [...array];

  for (let i = 0; i < sorted.length; i++) {
    let smallestIndex = i;

    let temp = sorted[i];

    if (callback) callback();

    // Search the unsorted part of the data to find the smallest value
    for (let j = i + 1; j < sorted.length; j++) {
      if (callback) callback();

      if (sorted[smallestIndex] > sorted[j]) {
        smallestIndex = j;
      }
    }

    // swap the smallest found value with the first element of the unsorted part
    if (smallestIndex !== i) {
      sorted[i] = sorted[smallestIndex];
      sorted[smallestIndex] = temp;
    }
  }

  return {
    ok: true,
    sorted,
  };
};

export {
  selectionSort
}
