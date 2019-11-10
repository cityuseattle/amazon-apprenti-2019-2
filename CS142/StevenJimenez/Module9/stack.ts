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
            throw new Error('Trhing to pop without items in it.');
    }

    top()
    {
       return( this.collection.length !== 0 ? this.collection[this.collection.length - 1] : null );
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