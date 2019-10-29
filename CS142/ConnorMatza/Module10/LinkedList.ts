class LinkedNode<T>
{
    element: T;
    next: undefined | LinkedNode<T>;
    prev: undefined | LinkedNode<T>;
    constructor(element: T)
    {
        this.element = element;
    }
}

class LinkedList<T>
{
    head: LinkedNode<T>;
    count: number;
    tail: LinkedNode<T>;

    constructor(value: T) {
        this.head = new LinkedNode<T>(value);
        this.tail = this.head;
        this.count = 1;
    }

    add(value: T) {
        let newNode = new LinkedNode<T>(value)
        if(!this.head) {
            return new LinkedList<T>(value);
        }
        else if (this.head === this.tail) {
            newNode.prev = this.head
            this.head.next = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    remove()
    {
        if(this.tail) {
            if(this.tail.prev)
            {
                let val = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = undefined;
                return val;
            }
            else
            {
                let val = this.tail;
                this.head = this.tail = undefined;
                this.count--;
                return val;
            }
        }
    }

    size() {
        return this.count; 
    }

    printList() {
        var stringToPrint = '['
        let currNode = this.head;

        while(currNode) {
            stringToPrint += currNode.element;
            if(currNode.next) {
            stringToPrint += ', '
            currNode = currNode.next;
            }
            else 
            {
                break;
            }
        }
        stringToPrint += ']'
        console.log(stringToPrint);
    }


}

let list = new LinkedList<number>(1);
for(let i = 0; i < 10; i++) {
    list.add(i);
}
list.printList();
for(let i = 0; i < 5; i++) {
    list.remove();
}
list.printList();
