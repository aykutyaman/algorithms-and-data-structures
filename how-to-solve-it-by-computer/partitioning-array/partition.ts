const swap = (items, left, right) => {
  let temp = items[left];
  items[left] = items[right];
  items[right] = temp;
}

const partition = (items: number[], pivot: number, start = 0, end = items.length - 1): number => {
  let left = start;
  let right = end;

  while (left <= right) {

    // proceed until we encounter an element larger than equal pivot
    while (left <= right && items[left] < pivot) {
      left++;
    }

    // proceed until we encounter an element smaller than pivot
    while (left <= right && items[right] >= pivot) {
      right--;
    }

    if (left <= right) {
      swap(items, left, right);
      left++;
      right--;
    }
  }
  return left;
}

export {
  partition
}
