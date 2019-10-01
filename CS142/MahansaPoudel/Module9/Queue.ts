class Queue<T> {
  private collection: T[];
  constructor() {
    this.collection = [];
  }

  enqueue(item: T) {
    this.collection.push(item);
  }

  dequeue() {
    if (this.collection.length !== 0) this.collection.shift();
    else throw new Error("Trying to dequeue without items in it.");
  }

  front() {
    if (this.collection.length !== 0) return this.collection[0];
    else return null;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
q.dequeue();
console.log(q.front());
q.dequeue();
console.log(q.front());
q.dequeue();
