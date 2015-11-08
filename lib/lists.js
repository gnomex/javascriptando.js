'use strict';

var LinkedList = require('../node_modules/algorithms/index').DataStructures.LinkedList;
var C = require('../node_modules/algorithms/util/comparator');

LinkedList.prototype.find = function (fn) {
  var nodes = this.head;

  for (var i = nodes; i !== null ; i = i.next) {
    if (!!fn(i.value)) {
      return i.value;
    };
  };
}

LinkedList.prototype.clone = function (l) {
  this.forEach(function (n) {
    l.add(n);
  })
};

LinkedList.prototype.enolc = function (l) {
  this.reversedEach(function (n) {
    l.add(n);
  })
};

LinkedList.prototype.contains = function (element) {
  return this.find(function (e) {
    if (e === element) {
      return true;
    };
  });
}

LinkedList.prototype.clone_and_remove_doubles = function (l) {
  this.forEach(function (n) {
    if (!l.contains(n))  {
      l.add(n);
    }
  })
};

LinkedList.prototype.reversedEach = function (fn) {
  var node = this.tail;
  while (node) {
    fn(node.value);
    node = node.prev;
  }
};

LinkedList.prototype.turnOver = function () {
  var t = this.head;
  this.head = this.tail;
  this.tail = t;
  var p = this.head;

  while(p !== null) {
    t = p.next;
    p.next = p.prev;
    p.prev = t;
    p = p.next;
  }
};


LinkedList.prototype.remove = function (e) {
  var nodes = this.head;

  for (var i = nodes; i !== null ; ) {
    var stick = i.next; // keep a reference
    if (e === i.value) {
      this.delNode(i);
    };

    i = stick;
  };
}

LinkedList.prototype.sorted_removal = function (e) {
  var nodes = this.head;

  for (var i = nodes; (i !== null) && (e >= i.value) ; ) {
    var stick = i.next; // keep a reference
    if (e === i.value) {
      this.delNode(i);
    };

    i = stick;
  };
}

/* Exe 1 */

/*Shoes Shop (code, model name, quantity per size, year)
  Order by code ASC
  Sort by year
  split by year

  Insert, show, remove*/

/* Exe 2 */

// Lists
// a) ordered? -1,0,1
// b) clone
// c) clone and remove doubles
// d) invert (in a new list)
// e) invert (side effect)

var listASC = new LinkedList();
var listDESC = new LinkedList();
var listUnSorted = new LinkedList();
var comparator = new C();

listASC.add(1);
listASC.add(2);
listASC.add(3);
listASC.add(4);
listASC.add(5);
listASC.add(6);
listASC.add(7);
listASC.add(8);
listASC.add(9);
listASC.add(10);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listASC.add(11);
listDESC.add(11);
listDESC.add(10);
listDESC.add(9);
listDESC.add(8);
listDESC.add(7);
listDESC.add(6);
listDESC.add(5);
listDESC.add(4);
listDESC.add(3);
listDESC.add(2);
listDESC.add(1);
listUnSorted.add(11);
listUnSorted.add(2);
listUnSorted.add(4);
listUnSorted.add(9);
listUnSorted.add(5);
listUnSorted.add(6);
listUnSorted.add(7);
listUnSorted.add(3);
listUnSorted.add(1);
listUnSorted.add(8);
listUnSorted.add(10);

var almostSorted  = function (list) {
  if (!list) {
    console.log('Hey, I need a list. Try again');
    return -100;
  }
  if (list.isEmpty()) {
    console.log('There are no elements');
    return -99;
  }
  if (list.length === 1) {
    console.log('List is sorted, only an element');
    return 'whatever';
  }

  var order = comparator.compare(list.head.value, list.tail.value);

  if (order === 0) {
    console.log('Firt and Last both equals');
  }

  var fn = {
    '-1': 'lessThanOrEqual',
    '0': 'equal',
    '1': 'greaterThanOrEqual'
  };

  var last = list.head.value;
  var keep;
  var zebra = false;

  list.forEach(function (v) {
    keep = comparator[fn[order]](last, v);
    last = v;
    // console.log(keep);

    if (!keep) {
      zebra = true;
      // console.log('Zebras!');
    }
  });

  return zebra ? 0 : order;
};

console.log('ASC Sorted? ', almostSorted(listASC));
console.log('DESC Sorted? ', almostSorted(listDESC));
console.log('Unsorted? ', almostSorted(listUnSorted));


/* b */

var cloned = new LinkedList();
var clonedWithOutDoubles = new LinkedList();
listASC.clone(cloned);
listASC.clone_and_remove_doubles(clonedWithOutDoubles);
console.log('Cloned: ', cloned.length);
console.log('Cloned with out doubles: ', clonedWithOutDoubles.length);

var reversed = new LinkedList();
listASC.enolc(reversed);
var str = '';
reversed.forEach(function (e) {
  str += e + ' ';
});
console.log('reversed from listASC: ', str);

str = '';
reversed.turnOver();
reversed.forEach(function (e) {
  str += e + ' ';
});
console.log('reverse the last one: ', str);

str = '';
reversed.remove(11);
reversed.forEach(function (e) {
  str += e + ' ';
});
console.log('Remove 11: ', str);

str = '';
reversed.sorted_removal(8);
reversed.forEach(function (e) { str += e + ' '; });
console.log('Sorted Removal 8: ', str);
