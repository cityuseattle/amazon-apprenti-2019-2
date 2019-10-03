class Stack<T>
{
    private collection: T[];
    constructor()
    {
        this.collection = [];
    }

    push(item: T)
    {
        this.collection.push(item);
    }

    pop()
    {
        if(this.collection.length !== 0)
            this.collection.pop();
        else
            throw new Error('Trying to pop without items in it.');
    }

    top()
    {
        if(this.collection.length !== 0)
            return this.collection[this.collection.length - 1];
        else
            return null;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());
stack.pop();
console.log(stack.top());
stack.pop();
console.log(stack.top());
stack.pop();