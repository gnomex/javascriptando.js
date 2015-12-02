'use strict';

var BST = require('../bower_components/algorithms.js/src/data_structures').BST;

var height = function (node) {
  if (node === null ){
    return -1;
  } else {
    var l = height(node.left);
    var r = height(node.right);

    if (l < r ) {
      return r + 1;
    } else {
      return l + 1;
    }
  }
}

var a = new BST();

a.insert(10);
a.insert(200);
a.insert(3000);
a.insert(40000);
a.insert(500000);

console.log(a.size);
console.log(height(a.root));
