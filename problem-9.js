/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized.*/

const toCamelCase = str => {
  let arr = str.split(""); //turning to array
  for(let i = 0; i < arr.length; i++){ //iterating through array
    if(arr[i] === "-" || arr[i] === "_"){ //if the current character in loop is a hyphen or underscore
      let upperCase = arr[i + 1].toUpperCase(); // saving uppercase letters need to variable
      arr.splice(i, 2 ,upperCase); // removing hyphens/underscores from array also the lowercase letter next to them with the uppercase letter needed
    }
  }
  return arr.join(""); //finally joining the array to a string and returning camelCased word 
}
