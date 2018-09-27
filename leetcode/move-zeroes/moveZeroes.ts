const moveZeroes = (numbers: number[]): void => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < (numbers.length - i) - 1; j++) {
      if (numbers[j] === 0) { // swap
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
      }
    }
  }
}

export {
  moveZeroes
}
