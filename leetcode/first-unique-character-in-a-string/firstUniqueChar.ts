const firstUniqueChar = (s: string): number => {
  const map = new Map();
  Array.from(s).forEach((char, index) => {
    let count =
      map.has(char)
        ? map.get(char).count + 1
        : 1;

    map.set(char, {
      index,
      count
    });
  });

  const r = Array.from(map.values()).find(element => (element.count === 1));
  return r ? r.index : -1;
}

export {
  firstUniqueChar
}
