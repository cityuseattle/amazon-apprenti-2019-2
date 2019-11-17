class Queue<T>
{
    private collection: T[];
    constructor()
    {
        this.collection = [];
    }

    enqueue(item: T)
    {
        this.collection.push(item);
    }

    dequeue()
    {
        if(this.collection.length !== 0)
            this.collection.shift();
        else
            throw new Error('Trying to queue without items in it.');
    }

    front()
    {
       return( this.collection.length !== 0 ? this.collection[0] : null );
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.dequeue();