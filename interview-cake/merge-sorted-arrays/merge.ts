// https://bit.ly/2xmTJp1

const canTakeFromFirstArray = (firstIndex, a1, secondIndex, a2) => (
  (firstIndex < a1.length)           // if a1 is exhausted return immediately false
  &&                                 // short circuit evaluation
  (secondIndex >= a2.length)       // if a2 exhausted return true immediately
  ||
  (a1[firstIndex] < a2[secondIndex]) // both arrays have values
)

const merge = (a1: number[], a2: number[]): number[] => {
  let firstIndex = 0;
  let secondIndex = 0;
  let merged = [];

  // while there are numbers at least one of the arrays
  while (firstIndex < a1.length || secondIndex < a2.length) {

    // can we take item from first array
    if (canTakeFromFirstArray(firstIndex, a1, secondIndex, a2)) {
      merged.push(a1[firstIndex]);
      firstIndex++;
    } else { // we can't take item from first array, push a2 element' item into merged
      merged.push(a2[secondIndex]);
      secondIndex++;
    }
  }
  return merged;
}

export {
  merge
}

/**
 Complexity, n is the number of items in the merged array
 - O(n) time cost,
 - O(n) space cost, added space comes from `merged` array. We can't do it "in place",
 because, neither of input arrays are necessarily big enough to hold the merged array.
*/
