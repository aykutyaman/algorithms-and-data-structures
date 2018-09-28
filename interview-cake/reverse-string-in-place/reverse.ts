const reverse = (chars: string[]): void => {
  // initialize left and right
  let left = 0;
  let right = chars.length - 1;

  // while we are not in the middle of the array
  while (left < right) {

    // swap left and right
    [chars[left], chars[right]] = [chars[right], chars[left]];

    // increment/decrement left and right
    left++;
    right--;
  }
}

export {
  reverse
}

/**
  Complexity
  - We iterate through array only once, so O(n) time cost
  - We swap items in place, without creating and additional space, O(1) space cost
*/
