const left = (i: number): number => 2 * i;
const right = (i: number, middle: number): number => 2 * (i - middle) - 1;

const middle = (items: any[]): number => (
  (items.length % 2 === 0)
    ? (items.length / 2) - 1
    : Math.floor(items.length / 2)
)

const rearrange = (items: any[]): any[] => (
  items.map((item, i, arr) => (
    (i <= middle(items))
      ? arr[left(i)]
      : arr[right(i, middle(items))]
  ))
)

export {
  rearrange
}
