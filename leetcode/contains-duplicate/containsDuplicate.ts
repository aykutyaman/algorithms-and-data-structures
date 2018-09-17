// https://leetcode.com/problems/contains-duplicate/description/

const reducer = map => (
  acc: Boolean, n: number, i: number, arr: number[]
): Boolean => (
    map.has(n)
      ? (arr.splice(i) && true) // no need to iterate more
      : (map.set(n, 1) && acc) // put the number into hash
  )

const containsDuplicate = (numbers: number[]): Boolean => (
  [...numbers].reduce(reducer(new Map()), false)
)

export {
  containsDuplicate
}
