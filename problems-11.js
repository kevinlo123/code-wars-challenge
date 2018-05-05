/*Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".*/

const balance = (left,right) => {
  let sumOfLeft = 0; //going to keep track of the weight of left
  let sumOfRight = 0; //going to keep track of the weight of right
  const leftArr = left.split(""); //creating array of left
  const rightArr = right.split(""); //creating array of right
  for(let i = 0; i < leftArr.length; i++) {
    leftArr[i] === "!" ? sumOfLeft += 2 : sumOfLeft += 3; //looping through left array and depending on what characters it contains adding the corresponding weight to the variable
  }
  for(let j = 0; j < rightArr.length; j++) {
    rightArr[j] === "!" ? sumOfRight += 2 : sumOfRight += 3; //looping through right array and depending on what characters it contains adding the corresponding weight to the variable
  }
  switch (true) { // switch statement used to return the correct string 
    case sumOfRight > sumOfLeft: // if right weighs more return "Right"
      return "Right";
      break;
    case sumOfLeft > sumOfRight: // if left weighs more return "Left"
      return "Left";
      break;
    default: // if neither of them way more than eachother then they are the same weight which deafult for this statement returns "Balance"
      return "Balance";
      break;
  }
}
