// Linked List in Javascript



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  
  middle(){
    let slow=this.head
    let fast=this.head
    let prev=null
    while(fast.next!==null&&fast!==null) {
        fast=fast.next.next
        prev=slow
        slow=slow.next
    }
   
    prev.next=slow.next
    this.size--
    
} 
}

const linkedlist = new LinkedList();
let arr = [1,2,3,4,5,6];

for(let i=0;i<arr.length;i++){
  linkedlist.addLast(arr[i])
}

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);

linkedlist.addLast(6);

linkedlist.removeTop();

linkedlist.addAt(2, 9);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log("size = " + linkedlist.size);




// Delete node with specified value


    removeByValue(value) {
        if (!this.head) return;
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
