var Stack = /** @class */ (function () {
    function Stack() {
        this.collection = [];
    }
    Stack.prototype.push = function (item) {
        this.collection.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.collection.length !== 0)
            this.collection.pop();
        else
            throw new Error('Trhing to pop without items in it.');
    };
    Stack.prototype.top = function () {
        return (this.collection.length !== 0 ? this.collection[this.collection.length - 1] : null);
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());
stack.pop();
console.log(stack.top());
stack.pop();
console.log(stack.top());
stack.pop();