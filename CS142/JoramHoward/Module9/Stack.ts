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
            this.collection.shift();
        else
            throw new Error('Trying to dequeue without items in it.');
    }

    top()
    {
        if(this.collection.length !== 0)
            return this.collection[0];
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