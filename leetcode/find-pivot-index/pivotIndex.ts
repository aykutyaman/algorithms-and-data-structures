const sum = (numbers: number[], left: number, right: number) => {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += numbers[i];
  }
  return sum;
}

// find left sum's start and end indexes
const left = (i) => (
  [0, i - 1]
)

// find right sum's start and end indexes
const right = (i, numbers) => (
  [i + 1, numbers.length - 1]
)

const pivotIndex = (numbers: number[]): number => (
  numbers.findIndex((num, i) => {
    if (sum(numbers, ...left(i)) === sum(numbers, ...right(i, numbers))) {
      return true;
    }
  })
)

export {
  pivotIndex
}
