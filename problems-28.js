/* Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.

Valid Output

#ffffff
#25a403
#000001
Non-Valid Output

#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7 */

var generateColor = function() {
  var octo = '#';
  var hexChars = '0123456789ABCDEF';
  for (var i = 0; i <= 5; i++) {
  	var randomNum = Math.floor(Math.random() * 16);
    var result = octo += hexChars[randomNum];
  }
  return result;
};
