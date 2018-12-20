# Bubblesort
- move higher values to right, lower values to left
- simplest
- not efficient, two loops,
- usually not used in production

# Pseudocode
Set swap check to true
Repeat until check swap is true
    Reset check swap to false
    Look at each adjacent pair
        If two adjacent elements are not in order
            Swap them
            Reset check swap to true

# Worst-case scenario
- array is in reverse order
- bubble each of the n elements all the way across the array
- O(n^2)

# Best-case scenario
- array is already sorted
- Ω(n)
