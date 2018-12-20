# Insertion Sort
- start with a single element(forming trivially sorted array)
- incrementally insert remaining elements so that the array stays sorted
- grab items from unsorted part, insert that into to the sorted part
- two loops, inner and outer

# Pseudocode
Call the first element of the array sorted
Repeat until all elements are sorted
    Look at the next unsorted element. Insert into the "sorted" portion by shifting
    requisite number of elements

# Worst-case scenario
- array is in reverse order
- have to shift each of the n elements n positions each time we make an insertion
- O(n^2)

# Best-case scenario
- array is already sorted
- simply keep moving the line between "unsorted" and "sorted" as we examine
  each element
- Ω(n)
