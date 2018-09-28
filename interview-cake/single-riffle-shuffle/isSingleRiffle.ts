const isSingleRiffle = (
  half1: number[], half2: number[], deck: number[]
): Boolean => {
  let first = 0;
  let second = 0;

  // iterate through shuffled deck
  for (let i = 0; i < deck.length; i++) {

    if (half1[first] && half1[first] === deck[i]) { // from first half
      first++;
    } else if (half2[second] && half2[second] === deck[i]) { // from second half
      second++;
    } else { // short circuit
      return false;
    }
  }

  // deck length must match with sum of first and second half counters
  return (first + second) === deck.length;
}

export {
  isSingleRiffle
}


/**
  Complexity
  - O(n) time cost
  - O(1) space cost
*/
