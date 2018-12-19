export const bubblesort = (nums: number[]): number[] => {
  let swapCounter = -1

  while (swapCounter !== 0) { // there were swaps from previous iteration
    swapCounter = 0
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        // swap numbers
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        swapCounter += 1
      }
    }
  }
  return nums
}
