// TODO: how to define elements of array with this syntax: <A>
const reverse = (items: any[]): void => {
  let i = 0;
  let j = items.length - 1;

  while (i < j) {

    // swap i'th element with it's pair j'th
    let tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;

    i++;
    j--;
  }
}


export {
  reverse
}
