interface Heap {
  data: any[],
  compare: Function
}

const heap = (data: any[], compare: Function): Heap => ({
  data,
  compare
})

const parentIndex = (index: number) => (
  index === 0
    ? index
    : Math.floor(index - 1) / 2
)

const hasParent = (childIndex: number) => (
  childIndex > 0
)

const notInCorrectOrder = (current, parent, heap: Heap) => (
  heap.compare(heap.data[parent], heap.data[current]) < 0
)

const swap = (current: number, parent: number, heap: Heap): void => {
  [heap.data[parent], heap.data[current]] = [heap.data[current], heap.data[parent]];
}

const heapifyUp = (current: number, heap: Heap): void => {
  while (hasParent(current) && notInCorrectOrder(current, parentIndex(current), heap)) {
    swap(current, parentIndex(current), heap);
    current = parentIndex(current);
  }
}

const extractRoot = (heap: Heap) => {

}

const add = (heap: Heap, element: any): void => {
  heap.data.push(element);
  heapifyUp(heap.data.length - 1, heap);
}

export {
  heap,
  add,
  extractRoot
}
