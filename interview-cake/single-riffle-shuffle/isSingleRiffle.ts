// https://bit.ly/2MschJH

const isSingleRiffle = (half1: number[], half2: number[], deck: number[]) => {
  let half1Index = 0;
  let half2Index = 0;
  let half1MaxIndex = half1.length - 1;
  let half2MaxIndex = half2.length - 1;

  for (let i = 0; i < deck.length; i++) {
    if (half1Index <= half1MaxIndex && deck[i] === half1[half1Index]) {
      half1Index++;
    } else if (half2Index <= half2MaxIndex && deck[i] === half2[half2Index]) {
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
}

export {
  isSingleRiffle
}
