const singleNumber = (array: number[]): number | null => {
  const map = new Map();

  array.forEach(n => {
    if (map.has(n)) {
      map.delete(n);
    } else {
      map.set(n, 1);
    }
  });
  return map.entries().next().value[0];
}

export {
  singleNumber
}
