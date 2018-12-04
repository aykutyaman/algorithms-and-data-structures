// TODO: ugly! refactor

const greatestTreeProduct = (n: Array<number>, acc) => {
  const first = (n[0] * n[1] * n[n.length - 1])
  const last = (n[n.length - 3] * n[n.length - 2] * n[n.length - 1])

  if (first > last) {
    if (first > acc) return first
  } else {
    if (last > acc) return last
  }
  return acc
}

const highestProduct = (nums: Array<number>): number => {
  if (nums.length < 3) throw Error('nums must has at least three numbers')

  const map = new Map([['numbers', []]])

  return nums.reduce((acc, num) => {

    const saved = map.get('numbers')

    // save 5 numbers to the  hash table
    if (saved.length < 5) {
      map.set('numbers', [...saved, num].sort((x, y) => x - y))
      if (saved.length < 3) return acc
    } else {
      const tmp = [...saved]
      if (num < saved[1]) {
        tmp[1] = num
      }
      if (num > saved[saved.length - 3]) {
        tmp[saved.length - 3] = num
      }
      map.set('numbers', tmp.sort((x, y) => x - y))
    }

    // find the greatest three numbers
    return greatestTreeProduct(map.get('numbers'), acc)

  }, nums[0] * nums[1] * nums[2])
}

export {
  highestProduct
}
