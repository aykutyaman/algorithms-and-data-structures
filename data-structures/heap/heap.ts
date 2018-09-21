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
    : Math.floor((index - 1) / 2)
)

const hasParent = (childIndex: number) => (
  childIndex > 0
)

const notInCorrectOrder = (current, parent, heap: Heap) => (
  heap.compare(heap.data[parent], heap.data[current]) < 0
)
const inCorrectOrder = (current, child, heap: Heap) => (
  heap.compare(heap.data[current], heap.data[child]) > 0
)
const swap = (current: number, parent: number, heap: Heap): void => {
  [heap.data[parent], heap.data[current]] = [heap.data[current], heap.data[parent]];
}

const heapifyUp = (current: number, heap: Heap): void => {
  while (
    hasParent(current) && notInCorrectOrder(current, parentIndex(current), heap)
  ) {
    swap(current, parentIndex(current), heap);
    current = parentIndex(current);
  }
}

const leftChildIndex = (parent: number): number => (
  (2 * parent) + 1
)

const hasLeftChild = (parent: number, heap: Heap): Boolean => (
  leftChildIndex(parent) < heap.data.length - 1
)
const rightChildIndex = (parent: number): number => (
  (2 * parent) + 2
)
const hasRightChild = (parent: number, heap: Heap): Boolean => (
  rightChildIndex(parent) < heap.data.length
)

const heapifyDown = (current: number, heap: Heap): void => {
  let nextIndex = null;
  while (hasLeftChild(current, heap)) {
    if (hasRightChild(current, heap)
      && heap.compare(heap.data[leftChildIndex(current)], heap.data[rightChildIndex(current)]) > 0) {
      nextIndex = leftChildIndex(current);
    } else {
      nextIndex = rightChildIndex(current);
    }
    if (inCorrectOrder(current, nextIndex, heap)) {
      break;
    }
    swap(current, nextIndex, heap);
    current = nextIndex;
  }
}

const extractRoot = (heap: Heap): any => {
  if (heap.data.length === 0) {
    return null;
  }
  if (heap.data.length === 1) {
    return heap.data.pop();
  }
  const item = heap.data[0];

  // move the last element to head
  heap.data[0] = heap.data.pop();
  heapifyDown(0, heap);

  return item;
}

const add = (heap: Heap, element: any): void => {
  heap.data.push(element);
  heapifyUp(heap.data.length - 1, heap);
}

const isEmpty = (heap: Heap): Boolean => (
  heap.data.length === 0
)

const peek = (heap: Heap): number | null => (
  heap.data.length === 0
    ? null
    : heap.data[0]
)

export {
  heap,
  add,
  extractRoot,
  isEmpty,
  peek
}
