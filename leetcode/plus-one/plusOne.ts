const plusOne = (digits: number[]): number[] => {
  // add one to the last digit
  digits[digits.length - 1] += 1;

  const reversed = digits.reverse();

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === 10) {
      reversed[i] = 0;
      if (reversed.length - 1 === i) { // new digit
        reversed[i + 1] = 1;
      } else {
        reversed[i + 1] += 1;
      }
    }
  }
  return reversed.reverse();
}

export {
  plusOne
}
