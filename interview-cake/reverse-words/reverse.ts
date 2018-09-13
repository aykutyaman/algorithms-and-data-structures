const reverseCharacters = (
  message: string[], left: number, right: number
): void => {
  while (left < right) {
    let temp = message[left];
    message[left] = message[right];
    message[right] = temp;

    left++;
    right--;
  }
}

const reverseWords = (words: string[]): void => {

  // first we reverse all the characters in the entire words
  reverseCharacters(words, 0, words.length - 1);

  // this gives us the right word order, but each word backward

  // now we'll make the words forward again by reversing each word's characters

  // we hold the index of the `start` of the current word as we look for the `end`

  let currentWordStartIndex = 0;

  for (let i = 0; i <= words.length; i++) {

    // found the end of the current word
    if (i === words.length || words[i] === ' ') {

      reverseCharacters(words, currentWordStartIndex, i - 1);

      // if we haven't exhausted the string, our next word's start is one char ehad
      currentWordStartIndex = i + 1;
    }
  }
}

export {
  reverseCharacters,
  reverseWords
}
