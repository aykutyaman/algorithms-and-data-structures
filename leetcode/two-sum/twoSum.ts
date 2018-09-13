// https://leetcode.com/articles/two-sum/

const twoSum_bruteForce = (
  numbers: number[], target: number, callback?: Function
): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (callback) callback();
      if (i === j) {
        continue;
      }

      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// Two-pass Hash Table Approach, time complexity: O(n)
const twoSum = (
  numbers: number[], target: number, callback?: Function
): number[] => {
  var map = new Map();

  // add each element's value and its index to the hash table
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }

  // check if each element's complement (target - numbers[i]) exists in table
  for (let i = 0; i < numbers.length; i++) {
    if (callback) callback();
    let complement = target - numbers[i];

    // Beware that the complement must not be nums[i] itself!
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return [-1, -1];
}


export {
  twoSum,
  twoSum_bruteForce
}
