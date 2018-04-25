/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F*/

const abbrevName = name => {
  let upperCaseName = name.toUpperCase(); // capitalizing the whole name i ran into errors when testing if i didnt do this
  let arr = upperCaseName.split(""); // turining the name into an array
  let abbrevArray = []; //empty array where our abreviations to the first and lastname will be added
  abbrevArray.push(arr.shift()); //removing the first letter of the name and pushing it to my empty array
  let emptyString = arr.indexOf(" "); //finding the index of the one space in the name argument
  let lastNameLetter = arr[emptyString + 1]; // saving the first letter directly after the space (lastname letter)
  abbrevArray.push(lastNameLetter); //pushing that letter to our array that has the firstname letter
  return abbrevArray.join("."); //joining and returning this array with a period between letters
}
