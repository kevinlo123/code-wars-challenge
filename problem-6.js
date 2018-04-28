/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'*/

const solution = string => {
  const capitalArray = string.toUpperCase().split("");//creating an upperCase array copy of the original string to compare it
  let stringArr = string.split("");//the argument string turned into an array(comparing this to the copy i made)
  for(let i = 0; i < stringArr.length; i++){ //iterating through the string array I made and comparing that to the copy 
    if(stringArr[i] === capitalArray[i]){  //comparison to find the Capitilized letters 
      stringArr[i] = ` ${stringArr[i]}`; 
    } //capitlized letters are found im setting there value but with a space in front of them using a template literal
  }
  return stringArr.join(""); joining the array with the broken up camel casing string/strings
}
