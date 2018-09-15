// https://leetcode.com/problems/contains-duplicate-ii/description/

const inRange = (currentIndex, nIndex, max) => (
  (currentIndex - nIndex) <= max
)

const reducer = map => max => (
  acc: Boolean, n: number, i: number, arr
): Boolean => (
    // TODO: refactor: complex and long line
    map.has(n)
      ? inRange(i, map.get(n), max) && arr.splice(i) && true || (map.set(n, i) && false)
      : (map.set(n, i) && acc)
  )

const containsDuplicate = (numbers: number[], max: number): Boolean => (
  [...numbers].reduce(reducer(new Map())(max), false)
)

export {
  containsDuplicate
}
