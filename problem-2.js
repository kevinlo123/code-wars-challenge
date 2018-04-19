/*Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.
Give your answer in string format as 'odd' or 'even'.
If the input array is empty consider it as: [0] (array with a zero).*/

const oddOrEven = (array) => {
  let sum = 0; //variable to hold the numbers in our array argument
  for(let i = 0; i < array.length; i++){ //looping through array 
    sum += array[i]; //adding all values in the array to sum
  }
  return sum % 2 === 0 ? 'even' : 'odd'; //ternary operator if sum is divided by 2 and no remainder return even else return odd
}
