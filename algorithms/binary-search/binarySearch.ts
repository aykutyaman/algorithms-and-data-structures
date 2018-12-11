// -- iterative --------------------------------------------
const iterativeSearch = (arr: Array<number>, target: number): boolean => {
  let floor = 0;
  let ceil = arr.length - 1;

  while (floor <= ceil) {
    let guess = floor + Math.floor((ceil - floor) / 2);
    if (arr[guess] === target) {
      return true;
    }
    if (target > arr[guess]) {
      floor = guess + 1;
    } else {
      ceil = guess - 1;
    }
  }
  return false;
}

// -- recursive ---------------------------------------------
const calcFloor = (floor, target, guessValue, guessIndex) =>
  (target > guessValue) ? guessIndex + 1 : floor;

const calcCeil = (ceil, target, guessValue, guessIndex) =>
  (target < guessValue) ? guessIndex - 1 : ceil;

const calcGuessIndex = (ceil, floor) =>
  floor + Math.floor((ceil - floor) / 2);

const recurse = (arr, floor, ceil, target) => {
  if (ceil < floor) return false;

  const guessIndex = calcGuessIndex(ceil, floor);

  if (arr[guessIndex] === target) return true;

  return recurse(
    arr,
    calcFloor(floor, target, arr[guessIndex], guessIndex),
    calcCeil(ceil, target, arr[guessIndex], guessIndex),
    target
  );
}

const recursiveSearch = (arr: Array<number>, target: number): boolean =>
  recurse(arr, 0, arr.length - 1, target);

export {
  iterativeSearch,
  recursiveSearch
}
