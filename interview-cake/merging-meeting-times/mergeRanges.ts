interface meeting {
  startTime: number,
  endTime: number
}

const mergeRanges = (ranges: meeting[]) => {
  const sorted = [...ranges].sort((x, y) => x.startTime - y.startTime);
  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    let lastMerged = merged[merged.length - 1];

    if (current.startTime <= lastMerged.endTime) { // merge
      lastMerged.endTime = Math.max(current.endTime, lastMerged.endTime);
    } else {
      merged.push(current);
    }
  }

  return merged;
};

export {
  mergeRanges
}
