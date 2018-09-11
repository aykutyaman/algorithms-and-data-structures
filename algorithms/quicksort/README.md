# Quicksort
The quicksort algorithm uses divide & conquer, and chooses a **pivot** point in a collection of elements. It **partitions** the collection around the pivot, so that elements smaller than the pivot are moved before it, and elements larger than the pivot are moved after it.
Even though the list isn't completely sorted yet, we know that the items are in the correct order in relation to the pivot. This means that we never compare the elements on the left side of the partition to elements on the right side of the partition. We already know they are in correct spots in relation to the pivot.

- Pick an element, called a pivot, from the array
- Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it(equal values can go either way).
After this partitioning, the pivot is in its final position. This is called the partition operation.
- Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

## Complexity
| Algorithm  |     Best    |   Average   |    Worst   |   Space  |
| ---------- | ----------- | ----------- | ---------- | -------- |
| Quick Sort | Ω(n log(n)) | Θ(n log(n)) |    O(n^2)  | O(log(n))|

## Resources
- [Quicksort algorithm](https://www.youtube.com/watch?v=COk73cpQbFQ&t=111s), mycodeschool
