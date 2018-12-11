

const binary = (nums: Array<number>, target: number, low = 0, high = nums.length - 1): number => {
  // base case
  if (low > high) return -1;
  // middle
  let middle = Math.floor((high + low) / 2);
  if (nums[middle] === target) return middle;

  // body
  if (target > nums[middle]) {
    return binary(nums, target, middle + 1, high);
  } else {
    return binary(nums, target, low, middle - 1);
  }
}

test('fo', () => {
  console.log(binary([-1, 3, 5, 9], 7));

})
