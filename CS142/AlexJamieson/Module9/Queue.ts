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
            throw new Error('Trying to dequeue without items in it.');
    }

    front()
    {
        if(this.collection.length !== 0)
            return this.collection[0];
        else
            return null;
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