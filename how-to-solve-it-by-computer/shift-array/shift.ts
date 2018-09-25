const NewIndex = (i: number, k: number, length: number): number => {
  return (length - (k % length) + i) % length;
}

const shift = (items: any[], k: number): void => {
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


// https://hackernoon.com/fun-with-array-rotations-add4a335d79a
const rotate = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

export {
  shift,
  rotate
}
