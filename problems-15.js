/*This simple kata is based around the down system in American football.
The team that is in possession of the ball (offense) has four downs (or you think of it as attempts,
tries or plays) to gain ten yards. If the offense gains at least ten yards in those four downs or fewer,
the team receives another set of four downs. This is also known as 'First down'. If the offense does not gain
ten yards in those four downs, they give the ball to the other team. This is also known as 'Turnover on downs'.

You will be given three integers. The down, the distance needed to gain a 'first down' and the yards gained on the play.
The result will be one of three things:

'First down' meaning that the yards gained on the play exceed the distance needed to gain the new set of downs.
Example: Down = 3, Distance = 5, Yards Gained = 15, Result = 'First down'

'Turnover on downs' meaning that the down is 4, and the yards gained on the play do NOT exceed the distance needed to
gain the new set of downs. Example: Down = 4, Distance = 5, Yards Gained = 0, Result = 'Turnover on downs'

The new down and distance. If the down is not 4, and the yard gained does NOT exceed the distance, then return the next
down and new distance needed to gain a first down. Example: Down = 1, Distance = 10, Yards Gained = 5, Result = '2nd and 5'*/

const chains = (down, distance, yardsGained) => {
  switch (true) {
    case yardsGained > distance:
      return "First down";
      break;
    case down === 4 && distance === yardsGained:
      return "First down";
      break;
    case down === 4 && yardsGained < distance:
      return "Turnover on downs";
      break;
    case down === 1 && distance > yardsGained:
      return `2nd and ${distance - yardsGained}`;
      break;
    case down === 2 && distance > yardsGained:
      return `3rd and ${distance - yardsGained}`;
      break;
    case down === 3 && distance > yardsGained:
      return `4th and ${distance - yardsGained}`;
      break;
  }
}
