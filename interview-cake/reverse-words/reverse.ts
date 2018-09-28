const reverse = (start: number, end: number, items: any[]): void => {
  while (start < end) {
    [items[start], items[end]] = [items[end], items[start]];
    start++;
    end--;
  }
}

const endOfWord = (
  i: number, chars: any[]
): Boolean => (
    chars[i] === ' ' || (i === chars.length)
  )

const reverseWords = (message: string[]): void => {
  // reverse all characters in the entire message
  reverse(0, message.length - 1, message);

  // set start end finish of a word
  let start = 0;

  // iterate through reverse message
  for (let i = 0; i <= message.length; i++) {

    // if we arrived end of a word or end of the array
    if (endOfWord(i, message)) {

      // reverse characters in each individual world
      reverse(start, i - 1, message);

      // set start of next word
      start = i + 1;
    }
  }
}

export {
  reverseWords
}

/**
  Complexity
  - O(n) time cost
  - O(1) space cost, in place replacement

  Take away:
  - solve a simpler version of the problem, and see if that gets us closer to a
  solution for the original problem.
*/
