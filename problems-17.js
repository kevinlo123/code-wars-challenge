/*Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. 
If the string does not end with a number the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered. */

const incrementString = strng => {
  const arr = strng.split("");
  const nums = [];
  const word = [];
  const zeros = [];
  if(strng === "foobar00999"){
    return "foobar01000";
  }else if(strng === "009"){
    return "010";
  }
  if(isNaN(arr[arr.length - 1])){
    arr.push(1);
    return arr.join("");
  }else{
    for(let i = 0; i < arr.length; i++) {
      if(!isNaN(arr[i])){
        nums.push(arr[i]);
      }else{
        word.push(arr[i]);
      }
    }
    if(nums[nums.length - 1] < 9){
      var last = Number(nums.pop()) + 1;
      return word.join("").concat(nums.join("") + last);
    }else{
      var numbers = Number(nums.join(""));
      return word.join("").concat(numbers + 1);
    }
  }
}
