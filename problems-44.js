/*Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

const repeatStr = (n, s) => {
  let res = "";
  for(let i = 0; i < n; i++) {
    res += s
  }
  return res;
}
