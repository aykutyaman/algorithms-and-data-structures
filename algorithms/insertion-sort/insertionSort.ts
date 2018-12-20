const insertionSort = s => {
  let i, j

  for (i = 1; i < s.length; i++) {
    j = i
    while ((j > 0) && (s[j] < s[j - 1])) {
      [s[j], s[j - 1]] = [s[j - 1], s[j]] // shift elements
      j = j - 1
    }
  }
  return s
}

export {
  insertionSort
}
