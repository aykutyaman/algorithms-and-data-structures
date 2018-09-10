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
const divide = (arr, element, middle) => (
  element > arr[middle]
    ? arr.slice(middle + 1)
    : arr.slice(0, middle)
);

const binarySearchR = (arr, element, middle = Math.floor(arr.length / 2)) => {
  if (arr.length === 0) return false;

  return (element === arr[middle])
    ? true
    : binarySearchR(divide(arr, element, middle), element);
};

module.exports = {
  binarySearchI,
  binarySearchR,
};
