const getRandom = (floor: number, ceiling: number): number => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}


const shuffle = (arr: Array<number>): void => {
  arr.forEach((_, i) => {
    let r = getRandom(i, arr.length - 1);
    [arr[i], arr[r]] = [arr[r], arr[i]]; // swap i with r
  })
}

export {
  shuffle
}
