var LinkedNode = /** @class */ (function () {
    function LinkedNode(element) {
        this.element = element;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new LinkedNode(value);
        this.tail = this.head;
        this.count = 1;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new LinkedNode(value);
        if (!this.head) {
            return new LinkedList(value);
        }
        else if (this.head === this.tail) {
            newNode.prev = this.head;
            this.head.next = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    LinkedList.prototype.remove = function () {
        if (this.tail) {
            if (this.tail.prev) {
                var val = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = undefined;
                return val;
            }
            else {
                var val = this.tail;
                this.head = this.tail = undefined;
                this.count--;
                return val;
            }
        }
    };
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.printList = function () {
        var stringToPrint = '[';
        var currNode = this.head;
        while (currNode) {
            stringToPrint += currNode.element;
            if (currNode.next) {
                stringToPrint += ', ';
                currNode = currNode.next;
            }
            else {
                break;
            }
        }
        stringToPrint += ']';
        console.log(stringToPrint);
    };
    return LinkedList;
}());
var list = new LinkedList(1);
for (var i = 0; i < 10; i++) {
    list.add(i);
}
list.printList();
for (var i = 0; i < 5; i++) {
    list.remove();
}
list.printList();
