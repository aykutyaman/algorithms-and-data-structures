const majorityElement = (items: number[]): number => (
  items.sort() && items[Math.floor(items.length / 2)]
)

export {
  majorityElement
}

/**
  Complexity
  - Time: O(n log n)
  sorting the array costs O(n log n)
  - Space: O(1)
  because we sorted items in place
*/
