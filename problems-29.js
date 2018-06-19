/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !*/


const pigIt = str => {
  let words = str.split(" ");
  let emptyArr = [];
  for (word of words) {
    if(word === "?" || word === "!" || word === "."){
      emptyArr.push(word)
    }else{
      let firstLetter = word.charAt(0);
      let latin = word += firstLetter + 'ay';
      emptyArr.push(latin.slice(1,latin.length));
    }
  }
  return emptyArr.join(" ");
}
