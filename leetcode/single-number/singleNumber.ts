// https://leetcode.com/problems/single-number/description/

// 1. iterate through all elements in numbers
// 2. try if hash table has the key
// 3. If yes, delete key/value pair
// 4. else set up key/value pair
// 5. In the end, there is only one element in hash table, so return it


const singleNumber = (numbers: number[]): number => {
  const map = new Map();
  numbers.forEach(n => map.has(n) ? map.delete(n) : map.set(n, 1));
  return map.keys().next().value;
}

export {
  singleNumber
}
