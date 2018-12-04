const isNotInAlphabeticalOrder = (arr: Array<string>) =>
  arr.some((char, i) => {
    return (arr.length - 1 !== i) // skip last item
      ? (char > arr[i + 1]) // check order
      : false
  })

const zip = (arr: Array<string>) =>
  arr.reduce((acc, item) => {
    const chars = item.split('')
    chars.forEach((_, i) => acc[i].push(chars[i]))
    return acc
  }, Array.from(new Array(arr[0].length), () => []))

const minDeletionSize = (arr: Array<string>) =>
  zip(arr).reduce((acc, sub) => (
    isNotInAlphabeticalOrder(sub) ? acc + 1 : acc
  ), 0)

export {
  zip,
  minDeletionSize
}
