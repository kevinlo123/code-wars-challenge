/* Write a reverseWords function that accepts a string a parameter,
   and reverses each word in the string. Any spaces in the string should 
   be retained. */

const reverseWords = (str) => {
  let arr = str.split(" "); //splitting str argument to a an array of words
  let wordsReversed = []; //where our split words will be pushed
  for(let i = 0; i < arr.length; i++) { //looping through array of words
    wordsReversed.push(arr[i].split("").reverse().join("")); //this loop is pushing reversed words into our empty array
  } 
  return wordsReversed.join(" "); // returning & joining our array of split words to a string and voila
}
