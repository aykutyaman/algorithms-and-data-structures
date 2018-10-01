const hasIntersection = (item: any[]): boolean => (
  (item[0] > 0) && (item[1] > 0)
)
const getMin = (item: any[]): number => (
  Math.min(item[0], item[1])
)
const reducer = map => (acc, key) => (
  hasIntersection(map.get(key))
    ? Array(getMin(map.get(key))).fill(key).concat(acc) // merge with acc
    : acc
)
const iterate = (map, a1: any[], a2: any[]): void => {
  // TODO: refactor a1 and a2 iteration
  a1.forEach(key => {
    let prev = map.has(key)
      ? map.get(key)
      : [0, 0];

    map.set(key, [prev[0] + 1, prev[1]]);
  });

  a2.forEach(key => {
    let prev = map.has(key)
      ? map.get(key)
      : [0, 0];

    map.set(key, [prev[0], prev[1] + 1]);
  });
}
const keysArray = (map) => (
  Array.from(map.keys())
)
const intersect = (a1: any[], a2: any[], map = new Map()): any[] => (
  iterate(map, a1, a2) || keysArray(map).reduce(reducer(map), [])
)

export {
  intersect
}
