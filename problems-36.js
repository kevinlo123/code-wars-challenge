/* create a function that will recieve an array as an argument and the out put should be the array items shuffled */

const shuffle = (arr) => {
  const input = arr;
  for(var i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return console.log(input)
}

//test

const colors = [
  'blue', 'red', 'blue',
  'red', 'green', 'yellow',
  'orange', 'yellow', 'orange',
  'green'
];

shuffle(colors);
