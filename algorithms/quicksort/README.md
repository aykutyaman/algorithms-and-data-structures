# Quicksort
The quicksort algorithm uses divide & conquer, and chooses a **pivot** point in a collection of elements. It **partitions** the collection around the pivot, so that elements smaller than the pivot are moved before it, and elements larger than the pivot are moved after it.
Even though the list isn't completely sorted yet, we know that the items are in the correct order in relation to the pivot. This means that we never compare the elements on the left side of the partition to elements on the right side of the partition. We already know they are in correct spots in relation to the pivot.

## Choosing Pivot
What we choose as the pivot is super important.
- Most quick sort implementations will choose either the **first** element or the **last** element as the pivot
- In an ideal quicksort algorithm, the pivot would always be the **middle-most** element, so that when we partition the list into sublists, they would be equal in size.

## Swapping
The way that we go about sorting is by keeping reference to elements at either end of the array, and compairing them to the pivot element. This allows for an **in place** implementation.
If the quicksort algorithm determines that two elements are out of order, it leans on its references to swap them into their place in the collection.

## Partitioning Implementation
1- Choose a pivot (usually highest-index item)
2- Create a **left** reference, pointing to the element at lowest index
3- Create a **right** reference, pointing to the element at highest index (not pivot)
4- While left reference is less then the pivot, move the pointer one element to the right.
   While right reference is greater than pivot, move the pointer one element to the left
5- If **both** left reference is greater than pivot **and** right reference is smaller than pivot,
    swap the elements at the two references.
6- Once the index of the left reference is greater than (or equal to) the index of the right reference,
    swap the pivot with the element at the **left** reference.

## Pseudocode
```
Partition (array, start, end) {
  pivot = array[end]
  pIndex = start
  for i = start to end - 1 {
    if (array[i] <= pivot) {
      swap(array, i, pIndex)
      pIndex = pIndex + 1
    }
  }
}
Quicksort(array, start, end) {
  if (start < end) {
    pIndex = Partition(array, start, end)
    Quicksort(array, start, pIndex - 1)
    Quicksort(array, pIndex + 1, end)
  }
}
```

## Resources
- [Quicksort algorithm](https://www.youtube.com/watch?v=COk73cpQbFQ&t=111s), mycodeschool
