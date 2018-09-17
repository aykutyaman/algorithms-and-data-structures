const validAnagram = (s: string, t: string): Boolean => {
  const map = new Map();

  s.split('').forEach(char => {
    map.set(char, (map.has(char)
      ? map.get(char) + 1
      : 1));
  });

  t.split('').forEach(char => {
    map.has(char) && (map.get(char) - 1 === 0)
      ? map.delete(char)
      : map.set(char, map.get(char) - 1)
  });

  return map.size === 0;
}

export {
  validAnagram
}
