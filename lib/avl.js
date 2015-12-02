'use strict';

var AVL = require('../bower_components/algorithms.js/src/data_structures').AVLTree;

var a = new AVL();

a.insert(1);
a.insert(2);
a.insert(3);
a.insert(4);
a.insert(6);
a.insert(7);
a.insert(8);
a.insert(10);
a.insert(11);
a.insert(12);
a.insert(13);
a.insert(15);
a.insert(16);
a.insert(18);
a.insert(19);
a.insert(20);
a.insert(21);
a.insert(22);
a.insert(28);
a.insert(29);
a.insert(30);
a.insert(31);
a.insert(32);
a.insert(34);
a.insert(36);
a.insert(37);
a.insert(38);
a.insert(40);
a.insert(42);
a.insert(43);

a.inOrder(a.root, function (e) {
  console.log('Value: ', e.value);
  console.log('-height ', e.height);
});

console.log('Removing the value 1');
a.remove(1);

a.inOrder(a.root, function (e) {
  console.log('Value: ', e.value);
  console.log('-height ', e.height);
});
