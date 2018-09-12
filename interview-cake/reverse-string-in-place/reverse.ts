const index = (length, i) => length - i - 1;
const middle = length => Math.floor(length / 2);

// swap ith element with kth element in the array
const swap = (array, i, k) => {
  let temp = array[i];
  array[i] = array[k];
  array[k] = temp;
}

const reverse = (chars: string[]) => {
  for (let left = 0; left < middle(chars.length); left++) { // loop until the middle
    let right = index(chars.length, left); // find index to replace with
    swap(chars, left, right); // swap chars
  }
}

export {
  reverse
}
