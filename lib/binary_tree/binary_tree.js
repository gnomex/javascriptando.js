'use strict';

var Btree = require('../../bower_components/algorithms.js/src/data_structures').BST;
var Queue = require('../../bower_components/algorithms.js/src/data_structures/queue');

Btree.prototype.findWithDepth = function (e, root, depth) {

  depth += 1;

  if (!root) {
    if (this.root) {
      root = this.root;
    } else {
      return false;
    }
  }

  if (root.value === e) {
    console.log(e + ' found and your depth degree is: ' + depth);
    return root;
  }

  if (this._comparator.lessThan(e, root.value))
    return root.left && this.findWithDepth(e, root.left, depth);

  if (this._comparator.greaterThan(e, root.value))
    return root.right && this.findWithDepth(e, root.right, depth);
};

/**
 * In-order traversal from the given node.
 */
Btree.prototype.inOrder = function (current, callback) {
  if (!current) {
    return;
  }

  this.inOrder(current.left, callback);
  if (typeof callback === 'function') {
    callback(current);
  }
  this.inOrder(current.right, callback);
};

/**
 * Post-order traversal from the given node.
 */
Btree.prototype.postOrder = function (current, callback) {
  if (!current) {
    return;
  }

  this.postOrder(current.left, callback);
  this.postOrder(current.right, callback);
  if (typeof callback === 'function') {
    callback(current);
  }
};

/**
 * Pre-order traversal from the given node.
 */
Btree.prototype.preOrder = function (current, callback) {
  if (!current) {
    return;
  }
  if (typeof callback === 'function') {
    callback(current);
  }
  this.preOrder(current.left, callback);
  this.preOrder(current.right, callback);
};

Btree.prototype.mirror = function (current) {
  if (!current) {
    return;
  }

  //Swap children
  var t = current.left;
  current.left = current.right;
  current.right = t;

  this.mirror(current.left);
  this.mirror(current.right);
};


/*
  Post Order path search
*/
Btree.prototype.path = function (current, path, leafs) {
  if (!current) {
    return;
  }

  path += 1;

  if (current.left === null && current.right === null) {
    // leafs[path] = current.value;
    leafs.push({'path': path, 'value': current.value});
  };

  this.path(current.left, path, leafs);
  this.path(current.right, path, leafs);
};

var a = new Btree;

a.insert(15);
a.insert(16);
a.insert(18);
a.insert(19);
a.insert(21);
a.insert(22);
a.insert(28);
a.insert(29);
a.insert(30);
a.insert(31);
a.insert(1);
a.insert(2);
a.insert(42);
a.insert(3);
a.insert(4);
a.insert(6);
a.insert(7);
a.insert(8);
a.insert(10);
a.insert(11);
a.insert(40);
a.insert(12);
a.insert(13);
a.insert(32);
a.insert(34);
a.insert(36);
a.insert(37);
a.insert(43);
a.insert(20);
a.insert(38);


console.log('#### => In order');
a.inOrder(a.root, function (e) {
  console.log('Value: ', e.value);
});

a.findWithDepth(34, a.root, 0);

a.findWithDepth(43, a.root, 0);

console.log('#### => Post order');

a.postOrder(a.root, function (e) {
  console.log('Value: ', e.value);
});

console.log('#### => Pre order');

a.preOrder(a.root, function (e) {
  console.log('Value: ', e.value);
});


console.log('#### => [Source] In order');
a.inOrder(a.root, function (e) {
  console.log('Value: ', e.value);
});

console.log('#### => [Mirror] In order');

a.mirror(a.root);

a.inOrder(a.root, function (e) {
  console.log('Value: ', e.value);
});


/* 4 ###########################################################*/

function rand () {
  var min = 0;

  return function getRandomIntInclusive(max) {
    max = max || Number.MAX_VALUE;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var r = rand();

console.log("A random number: " + r());
console.log("A random number: " + r());
console.log("A random number: " + r(100));
console.log("A random number: " + r(10000));
console.log("A random number: " + r(928312));

var bst = new Btree();

var difference = []

for (var i = 0; i < 50; i++) {
  var bst = new Btree();

  for (var j = 0; j < 100; j++) {
    bst.insert(r(100000));
  };
  console.log('Iteration ' + i + ' generated tree size: ' + bst.size);

  var diff = [];
  bst.path(bst.root, 0, diff);

  diff.sort(function (a, b) {
    if (a['path'] > b['path']) {
      return 1;
    }
    if (a['path'] < b['path']) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  var avg = diff[diff.length - 1].path - diff[0].path;

  difference.push({'i': i, 'diff': avg});
  // difference.push(diff);
};


var middleAgeWithReduce = function (json) {
  var counter = json
    .reduce(function (counter, elem) {
      var age = new Date().getFullYear() - new Date(elem.fundacao).getFullYear();
      return counter + age;
    }, 0);
    var avg = counter / json.length;
    return Math.round(avg*100)/100;
};

console.log(difference);

/* 5 ########################################################*/

var mbt = new Btree;

mbt.insert(15);
mbt.insert(16);
mbt.insert(18);
mbt.insert(19);
mbt.insert(21);
mbt.insert(22);
mbt.insert(28);
mbt.insert(29);
mbt.insert(30);
mbt.insert(31);
mbt.insert(1);
mbt.insert(2);
mbt.insert(42);
mbt.insert(3);
mbt.insert(4);
mbt.insert(6);
mbt.insert(7);
mbt.insert(8);
mbt.insert(10);
mbt.insert(11);
mbt.insert(40);
mbt.insert(12);
mbt.insert(13);
mbt.insert(32);
mbt.insert(34);
mbt.insert(36);
mbt.insert(37);
mbt.insert(43);

// console.log('#### => Post order');

// mbt.postOrder(mbt.root, function (e) {
//   console.log('Vmbtlue: ', e.vmbtlue);
// });

// console.log('#### => Pre order');

// mbt.preOrder(mbt.root, function (e) {
//   console.log('Value: ', e.value);
// });


/* 7 ########################################################*/

/*
  1 + n + n - 1 + n - 1 + n-1 + 1 = 4n - 1 = Theta(n)

  O(n) para todos os casos: o algoritmo sempre irá percorrer o conjunto todo

*/
function selectMAX (arr) {              // T(n)
  var max = arr[0];                     // 1

  arr.forEach(function (elem, index) {  // n + n-1
    if (elem > max) {                   // n - 1
      max = elem;                       // n - 1
    };
  });

  return max;                           // 1
}
/* idem ao algoritmo anterior */
function selectMIN (arr) {
  var min = arr[0];

  arr.forEach(function (elem, index) {
    if (elem < min) {
      min = elem;
    };
  });

  return min;
}

/*
  Dois casos: para um conjunto desordenado: ele é ótimo pois para aplicar outras estratégias de busca é preciso ordenar o conjunto, sendo mais eficiente;
              para um conjunto ordenado: é péssimo pois sempre percorre o conjunto todo para selecionar um elemento
  A busca binária é muito mais eficiente no cenário do conjunto ordenado, apresentando uma ordem de O(lg n), equanto o algoritmo acima é O(n)
*/
