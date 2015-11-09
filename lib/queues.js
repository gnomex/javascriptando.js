'use strict';

var Queue = require('../node_modules/algorithms/index').DataStructures.Queue;
// var C = require('../node_modules/algorithms/util/comparator');

Queue.prototype.top = function () {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this._elements.get(this.length - 1);
};


/* Exe 1 */

console.log('Exe 1: Violates FIFO constraint, cannot be implemented as queue.');

var numbers = new Queue();
var temporary = new Queue();

numbers.push(1);
numbers.push(-1);
numbers.push(2);
numbers.push(-2);
numbers.push(3);
numbers.push(-3);

numbers.forEach(function (e) {
  console.log('>', e);
});

var positive;
while(!numbers.isEmpty()){
  positive = numbers.pop();

  if (positive >= 0) {
    temporary.push(positive);
  };
}

console.log('temporary queue: ', numbers.length, ' stack: ', temporary.length)

while(!temporary.isEmpty()){
  numbers.push(temporary.pop());
}

numbers.forEach(function (e) {
  console.log('>', e);
});

console.log('End of ex 1');

/* Exe 2 */

// Merge 2 queues to 1 order ASC

function requeue (q1, q2) {
  var qfinal = new Queue();
  var l = q1.pop(),
      r = q2.pop();

  while (true) {
    if (l <= r) {
      qfinal.push(l);

      if (q1.isEmpty()) {
        qfinal.push(r);

        while (!q2.isEmpty()) {
          qfinal.push(q2.pop());
        }
        break;
      }

      l = q1.pop();
    } else {
      qfinal.push(r);

      if (q2.isEmpty()) {
        qfinal.push(l);

        while (!q1.isEmpty()) {
          qfinal.push(q1.pop());
        }
        break;
      }

      r = q2.pop();
    }
  }

  return qfinal;
}

var q1 = new Queue(),
    q2 = new Queue();

q1.push(1);
q1.push(2);
q1.push(3);
q1.push(7);
q1.push(8);
q1.push(9);
q2.push(4);
q2.push(5);
q2.push(6);
q1.push(10);
q1.push(11);
q1.push(12);
q2.push(13);
q2.push(14);
q2.push(15);

var big_queue = requeue(q1, q2);

console.log(big_queue.length);

big_queue.forEach(function (e) {
  console.log('>', e);
});

/* Exe 3 */
// In JS its natural, we don't need new code and routines to put that to work, nodes can be anything.

// Stack queue -> A queue with stack nodes
/*var stack_queue = new Queue();
stack_queue.push(new Stack());
stack_queue.push(new Stack());
stack_queue.push(new Stack());
var first_stack = stack_queue.pop();*/

// Queue stack -> A stack with queue nodes
/*var queue_stack = new Stack();
queue_stack.push(new Queue());
queue_stack.push(new Queue());
queue_stack.push(new Queue());
var last_queue = queue_stack.pop();*/

// Queue queues -> A queue with queue nodes
/*var queue_of_queues = new Queue();
queue_of_queues.push(new Queue());
queue_of_queues.push(new Queue());
queue_of_queues.push(new Queue());
var first_queue = queue_of_queues.pop();*/


