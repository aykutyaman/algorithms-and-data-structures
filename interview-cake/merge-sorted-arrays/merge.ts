// https://bit.ly/2xmTJp1

const merge = (a1, a2) => {
  const merged = [];
  let a1Index = 0;
  let a2Index = 0;
  let mergedIndex = 0;

  while (mergedIndex < a1.length + a2.length) {
    if (a1Index >= a1.length) { // a1 exausted
      merged[mergedIndex] = a2[a2Index];
      a2Index++;
    } else if (a2Index >= a2.length) { // a2 exausted
      merged[mergedIndex] = a1[a1Index];
      a1Index++;
    } else if (a1[a1Index] < a2[a2Index]) {
      merged[mergedIndex] = a1[a1Index];
      a1Index++;
    } else {
      merged[mergedIndex] = a2[a2Index];
      a2Index++;
    }

    mergedIndex++;

  }
  return merged;
}

export {
  merge
}
