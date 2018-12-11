const calcLow = (nums, target, middle, low) =>
  (target > nums[middle]) ? middle + 1 : low

const calcHigh = (nums, target, middle, high) =>
  (target < nums[middle]) ? middle - 1 : high

const search = (nums, target, low = 0, high = nums.length - 1) => {
  // base case
  if (low > high) return -1;
  // middle
  let middle = Math.floor((high + low) / 2);
  if (nums[middle] === target) return middle;

  // body
  return search(
    nums,
    target,
    calcLow(nums, target, middle, low),
    calcHigh(nums, target, middle, high)
  );
}

test('fo', () => {
  console.log(search([-1, 3, 5, 7, 11], 7));

})
