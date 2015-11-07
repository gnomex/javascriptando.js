require('algorithms').DataStructures;

/*Exe 1*/

var a = new Stack(); // All delivered packages. A larger box can't be placed on top of a smaller
var b = new Stack(); // Only 5 T
var c = new Stack(); // Only 3 T


// 7,5,3 tons
var package = function Package (weight) {
  var weight = weight;
}

delivered -> A

if A.peek() > arrive.weight
  distribute -> slaves.toWork()
  A.push(delivered)
  bundle b->A, c->A
else
  A.push(delivered)





/* Exe 2 */

function toBin(base) {
  return function (n) {
    var foo = '';
    while(n > 0 ) {
      foo += (n % base);
      n = Math.floor(n/base);
    }

    return foo;
  };
}

var s = new Stack(); // Only 3 T

function toBin(base) {
  return function (n, stack) {
    while(n > 0 ) {
      stack.push(n % base);
      n = Math.floor(n/base);
    }
  };
}

var stack = toBin(2);
stack(10, s);
s.to_s();


/* Exe 3 */
([a-z&&[^aeiou]]*)
var input = "'Warehouse','Local Release','Local Release DA'";
var regex = /'(.*?)'/g;


var matches, output = [];
while (matches = regex.exec(input)) {
    output.push(matches[1]);
}

while letters.pop()
  vowel -> direct
  consonant -> invert until vowel or EOL


var vowel = /[aeiou]/ig;
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
