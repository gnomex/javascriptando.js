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
};

/*Exe 1*/

function Yard () {
  var stacks = {
    '7': new Stack(), /*A*/
    '5': new Stack(), /*B*/
    '3': new Stack()  /*C*/
  };

  Yard.prototype.inspect = function () {
    console.log('A: ', stacks['7'].to_s());
    console.log('B: ', stacks['5'].to_s());
    console.log('C: ', stacks['3'].to_s());
  };

  Yard.prototype.distribute = function () {
    var dispatch;

    console.log('- distributing');

    while ( !stacks['7'].isEmpty() ){ /*while defined*/
      if (stacks['7'].peek() === 7) {
        return;
      }

      dispatch = stacks['7'].pop();
      if (dispatch !== 7) {
        stacks[dispatch].push(dispatch);
      }
    }
  };

  Yard.prototype.bundle = function () {
    var waiting;

    console.log('-> bundle 5');
    while( !stacks['5'].isEmpty() )  {
      waiting = stacks['5'].pop();
      stacks['7'].push(waiting);
    }
    console.log('-> bundle 3');
    while( !stacks['3'].isEmpty() )  {
      waiting = stacks['3'].pop();
      stacks['7'].push(waiting);
    }
  };

  Yard.prototype.arrived =function (box) {
    if (stacks['7'].isEmpty()) {
      stacks['7'].push(box); //equal
      return;
    }
    if (stacks['7'].peek() === box) {
      stacks['7'].push(box); //equal
    } else  {
      this.distribute();
      stacks[box].push(box);
      this.bundle();
    }
  };
}

var yard = new Yard();

yard.arrived(7);
yard.arrived(5);
yard.arrived(3);
yard.arrived(7);
yard.arrived(5);
yard.arrived(3);
yard.arrived(7);
yard.arrived(5);
yard.arrived(3);
yard.arrived(7);
yard.arrived(7);
yard.arrived(5);
yard.arrived(3);
yard.arrived(5);
yard.arrived(3);
yard.inspect();

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

function to_b(base) {
  base = base || 2; //default base 2
  return function (n, stack) { // A n(dec) number and a stack
    while(n > 0 ) {
      stack.push(n % base); // Number mod base
      n = Math.floor(n / base); // number div base
    }
  };
}

var s = new Stack();
var binary = to_b(2);
binary(5, s);
console.log('5 dec to b: %o', s.to_s());

s = new Stack();
binary(500, s);
console.log('500 dec to b: %o', s.to_s());

s = new Stack();
binary(255, s);
console.log('255 dec to b: %o', s.to_s());


/* Exe 3 */
// ([a-z&&[^aeiou]]*)
/*var input = ''Warehouse','Local Release','Local Release DA'';
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
