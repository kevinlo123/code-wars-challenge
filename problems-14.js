/*Given a number , Return The Maximum number could be formed from the digits of the number given .
Notes
Only Positve numbers passed to the function , numbers Contain digits [1:9] inclusive  !alt !alt
Digit Duplications could occur , So also consider it when forming the Largest  !alt
Input >> Output Examples:
1- maxNumber (213) ==> return (321) */

const maxNumber = num => {
  let max = []; //going to hold our nums from least to greatest
  const arr = num.toString().split("").sort((a,b) => { //sorting our argument into an array from least to greatest
    return a - b;
  });
  for(let i = arr.length - 1; i >= 0; i--){ //pushing into our max array starting with the greatest
    max.push(arr[i]);
  }  
  return Number(max.join("")); //joining array into a number and returning
}
