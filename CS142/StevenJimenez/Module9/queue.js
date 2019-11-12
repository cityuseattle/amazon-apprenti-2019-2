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
            throw new Error('Trhing to dequeue without items in it.');
    };
    Queue.prototype.front = function () {
        return (this.collection.length !== 0 ? this.collection[0] : null);
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