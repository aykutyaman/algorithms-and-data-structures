const sort = (arr, max) => {
  const result = []
  const numCounts = new Array(max + 1).fill(0)

  arr.forEach(num => numCounts[num] += 1)

  numCounts.forEach((num, key) => {
    for (let i = 0; i < num; i++) {
      result.push(key)
    }
  })
  return result
}

export {
  sort
}
