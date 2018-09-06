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
const _binarySearchR = (arr, element, start, finish) => {
  if (finish >= start) {
    let middle = Math.floor((finish + start) / 2);
    if (element === arr[middle]) {
      return true;
    } else if (element > arr[middle]){
      return _binarySearchR(arr, element, middle + 1, finish);
    } else if (element < arr[middle]) {
      return _binarySearchR(arr, element, start, middle - 1);
    }
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
