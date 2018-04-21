/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle */

const findNeedle = (haystack) => { // creating my function with the parameter being the array of strings that we'll get
  const needle = "needle"; //constant variable that we must find 
  let count = 0; //keeping track of how many times the array iterates before it lands on what we're looking for
  for (let i = 0; i < haystack.length; i++) {
    count += 1;
    if(haystack[i] === needle) { // if any item in the array is equal to constant need in value and type
      return `found the needle at position ${count - 1}`; //we will return the string the question is asking for in a template literal
    }
  }
}
