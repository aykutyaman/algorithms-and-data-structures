# Selection Sort
In selection sort, the idea of the algorithms is to find the smallest unsorted element and add it to the end of the sorted list

## In pseudocode
- Repeat until no unsorted elements remain:
  - Search the unsorted part of the data to find the smallest value
  - Swap the smallest found value with the first element of the unsorted part

## Worst-case scenario O(n^2)
We have to iterate over each of the `n` elements of the array(to find the smallest unsorted element) and we must repeat
this process `n` times, since only one element gets sorted on each pass

## Best-case scenario Ω(n^2)
There's no way to guarantee the array is sorted until we go through this process for all the elements
