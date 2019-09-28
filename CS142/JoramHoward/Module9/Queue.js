var Queue = /** @class */ (function () {
    function Queue() {
        this.collection = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.collection.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.collection.length !== 0)
            this.collection.shift();
        else
            throw new Error('Trying to dequeue without items in it.');
    };
    Queue.prototype.front = function () {
        if (this.collection.length !== 0)
            return this.collection[0];
        else
            return null;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.dequeue();
