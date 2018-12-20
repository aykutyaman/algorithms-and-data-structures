export const bubblesort = (nums: number[]): number[] => {
  let checkSwap = true

  while (checkSwap) { // there were swaps from previous iteration
    checkSwap = false
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        // swap numbers
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        checkSwap = true
      }
    }
  }
  return nums
}
