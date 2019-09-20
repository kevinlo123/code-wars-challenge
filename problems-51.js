/*Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/

function findOdd(A) {
  let resArr = [];
  let answer;
  
  const countInArray = (array, value) => {
    return array.reduce((n, x) => n + (x === value), 0);
  }
  
  A.map(num => {
    let count = countInArray(A, num);
    resArr.push({
      num: num,
      timesShown: count
    });
  });
  
  resArr.filter( numObj => {
    if (numObj.timesShown % 2) {
      answer = numObj.num
      return numObj.num
    }
  });
  
  return answer;
 }
