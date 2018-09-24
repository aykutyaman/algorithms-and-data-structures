const swap = (items, left, right) => {
  let temp = items[left];
  items[left] = items[right];
  items[right] = temp;
}

const partition = (items: number[], pivot: number, start = 0, end = items.length - 1): void => {
  let left = start;
  let right = end;

  while (left <= right) {

    // find a left item to move to the right partition
    while (left <= right && items[left] < pivot) {
      left++;
    }

    // find a right item to move to the left partition
    while (left <= right && items[right] >= pivot) {
      right--;
    }

    if (left <= right) {
      swap(items, left, right);
      left++;
      right--;
    }
  }
}

export {
  partition
}
