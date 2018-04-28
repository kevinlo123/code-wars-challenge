/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] */

const countSmileys = arr => {
  const acceptible = [ //array of acceptible smiley faces
    ':)',':-)',':~)',
    ':D',':-D',':~D',
    ';)',';-)',';~)',
    ';D',';-D',';~D'
  ];
  let count = 0; //counter to keep track of how many smileys are in the array argument
  for (let i = 0; i < acceptible.length; i++) { //looping through acceptible answers
    for (let j = 0; j < arr.length; j++) { ////looping through array argument 
      if (acceptible[i] === arr[j]) { //comparing elements in both arrays
        count += 1; //if they match add one to counter
      }
    }
  }
  return count; //return the total amount of valid smileys in the array argument
}
