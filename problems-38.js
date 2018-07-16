/*Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.*/

parse("iiisdoso")  ==>  [8, 64]

// Return the output array, and ignore all non-op characters
const parse = data => {
  let value = 0;
  const resArr = [];
  const arr = data.split("");
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]){
      case "i":
        value++; 
        break;
      case "d":
        value--; 
        break;
      case "s":
        value = value * value; 
        break;
      case "o":
        resArr.push(value);
        break;
    }
  }
  return resArr;
}
