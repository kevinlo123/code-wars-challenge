/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

const findShort = s => {
  const lengthsOfWords = [];
  const arr = s.split(" ");
  for(let i = 0; i < arr.length; i++) {
    lengthsOfWords.push(arr[i].length);
  }
  lengthsOfWords.sort((a, b) => {
    return a - b;
  });
  return lengthsOfWords[0];
}
