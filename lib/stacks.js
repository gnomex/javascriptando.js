'use strict';

var Stack = require('../node_modules/algorithms/index').DataStructures.Stack;

/* To string property for stacks */
Stack.prototype.to_s = function () {
  var s = '';

  // Traverse the stack without changes (inspect only: not violates the LIFO constraint)
  this.forEach(function (e) {
    s += e;
  });

  return s;
}



/*Exe 1*/

var a = new Stack(); // All delivered packages. A larger box can't be placed on top of a smaller
var b = new Stack(); // Only 5 T
var c = new Stack(); // Only 3 T


// 7,5,3 tons
var pack = function Package (weight) {
  var weight = weight;
}

/*delivered -> A

if A.peek() > arrive.weight
  distribute -> slaves.toWork()
  A.push(delivered)
  bundle b->A, c->A
else
  A.push(delivered)

*/



/* Exe 2 */

/*function toBin(base) {
  return function (n) {
    var foo = '';
    while(n > 0 ) {
      foo += (n % base);
      n = Math.floor(n/base);
    }

    return foo;
  };
}*/

function toBin(base) {
  base = base || 2; //default base 2
  return function (n, stack) {
    while(n > 0 ) {
      stack.push(n % base); // Number mod base
      n = Math.floor(n / base); // number div base
    }
  };
}

var s = new Stack();
var binary = toBin(2);
binary(5, s);
console.log("5 dec to b: %o", s.to_s());

s = new Stack();
binary(500, s);
console.log("500 dec to b: %o", s.to_s());

s = new Stack();
binary(255, s);
console.log("255 dec to b: %o", s.to_s());


/* Exe 3 */
// ([a-z&&[^aeiou]]*)
/*var input = "'Warehouse','Local Release','Local Release DA'";
var regex = /'(.*?)'/g;


var matches, output = [];
while (matches = regex.exec(input)) {
    output.push(matches[1]);
}

while letters.pop()
  vowel -> direct
  consonant -> invert until vowel or EOL
*/

/*var vowel = /[aeiou]/ig;
var re = /([a-z&&[^aeiou]]*)/ig;
var str = 'Kenner';
var m;

if ((m = re.exec(str)) !== null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
    console.log(m);
    // View your result using the m-variable.
    // eg m[0] etc.
}
*/
