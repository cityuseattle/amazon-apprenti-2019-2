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
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
q.dequeue();
console.log(q.front());
q.dequeue();
console.log(q.front());
q.dequeue();