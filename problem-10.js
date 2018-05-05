/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You got an array with your colleges' points. Now calculate the average to your points!

Return True if you're better, else False!

Note:
Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!*/

const betterThanAverage = (classPoints, yourPoints) => {
  let sum = 0; this variable will hold the sum of all points
  for (let i = 0; i < classPoints.length; i++){
    sum += classPoints[i]; // sum of all classes points
  }
  return yourPoints > sum / classPoints.length ? true : false; //if your points are higher than the average of the class return true else return false
}
