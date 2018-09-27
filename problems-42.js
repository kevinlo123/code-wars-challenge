/*Create (a) method(s) eqAll that determines if all elements of a list are equal.
list can be a String or an Array; return value is a Boolean.
Your method(s) should not be enumerable. Equality should be strict (===).

Examples
"aaaaa".eqAll() => true
"abcde".eqAll() => false
[0,0,0].eqAll() => true
[0,1,2].eqAll() => false

"".eqAll() => true
[].eqAll() => true*/

Object.defineProperty( 
  String.prototype, "eqAll", { value:
    function eqAll() {
      var arr = this.split("");
      for(var i = 1; i < this.length; i++) {
        if(arr[i] !== arr[0]){
          return false;
        }
      }
      return true;
    } 
  });

Object.defineProperty( 
  Array.prototype, "eqAll", { value: 
    function eqAll() {
      for(var i = 1; i < this.length; i++) {
        if(this[i] !== this[0]){
          return false;
        }
      }
      return true;
    }
  });
