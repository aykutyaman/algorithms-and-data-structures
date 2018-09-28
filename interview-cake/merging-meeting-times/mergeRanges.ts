interface Range {
  startTime: number,
  endTime: number
}

const overlaps = (first: Range, second: Range): Boolean => (
  first.endTime >= second.startTime
)

const selectEndTime = (first: Range, second: Range) => (
  (first.endTime > second.endTime)
    ? first.endTime
    : second.endTime
)

const mergeRanges = (ranges: Range[]): Range[] => {
  // sort ranges by start time
  const sorted = ranges.sort((x, y) => x.startTime - y.startTime);

  // create a new array for storing merged ranges
  const merged = [];

  // iterate through ranges
  for (let i = 0; i < sorted.length; i++) {
    let first = merged[merged.length - 1];
    let second = sorted[i];

    // if first range overlaps with the second range
    if (first && overlaps(first, second)) {

      // merge first range with second range
      first.endTime = selectEndTime(first, second);
    } else {

      // else push second range into merged ranges
      merged.push(second);
    }
  }

  return merged;
}

export {
  mergeRanges
}

/**
 Complexity
 O(n lg n) time and O(n) space
 - We sort all meetings first, this gives us O(n lg n) time cost
 - We create a new array of merged times. In the worst case, none of the meetings
 overlap, giving an array identical to the input array. Thus O(n) space cost
 */
