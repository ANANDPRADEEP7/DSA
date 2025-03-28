// queue-implementation.js


// Basic Queue Implementation

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, cannot perform dequeue";
    }

    return this.queue.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }

    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ", ";
    }

    console.log("Queue: " + queueString);
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(96);
myQueue.enqueue(786);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
console.log(myQueue.front());




// circular-queue.js

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

// [2,5,72]

var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(4);
obj.enQueue(2);
obj.deQueue();
obj.enQueue(5);
obj.deQueue();
obj.enQueue(72);

console.log(obj.Front(), obj.Rear());




