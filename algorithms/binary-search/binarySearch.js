/**
   find out the middle of array
   if element is equal to middle
     return true
   else if element is greater than the middle
     look at the right side of the array
   else if
     look at the left side of the array
*/

// iterative
const binarySearchI = (arr, element) => {
  let start = 0;
  let finish = arr.length - 1;

  while (finish >= start) {
    let middle = Math.floor((finish + start) / 2);
    if (arr[middle] === element) {
      return true;
    } else if (element > arr[middle]) {
      start = middle + 1;
    } else if (element < arr[middle]) {
      finish = middle - 1;
    }
  }
  return false;
};

// recursive
const startFinish = (element, middle, arr, start, finish) => {
  return element > arr[middle]
    ? [middle + 1, finish]
    : [start, middle - 1];
};

const _binarySearchR = (arr, element, start, finish) => {
  if (finish >= start) {
    let middle = Math.floor((finish + start) / 2);

    const result = startFinish(element, middle, arr, start, finish);

    return (element === arr[middle])
      ?  true
      : _binarySearchR(arr, element, ...result);
  }
  return false;
};

const binarySearchR = (arr, element) => {
  return _binarySearchR(arr, element, 0, arr.length - 1);
};

module.exports = {
  binarySearchI,
  binarySearchR,
};
