var LinkedNode = /** @class */ (function () {
    function LinkedNode(element) {
        this.element = element;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.add = function (element) {
        var node = new LinkedNode(element);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else if (this.head === this.tail) {
            node.prev = this.head;
            this.head.next = this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail = this.tail.next = node;
        }
        this.length++;
    };
    LinkedList.prototype.remove = function () {
        if (this.tail) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = undefined;
            }
            else
                this.head = this.tail = undefined;
            this.length--;
        }
    };
    LinkedList.prototype.printList = function () {
        var stringToPrint = '[ ';
        var currNode = this.head;
        while (currNode) {
            stringToPrint += currNode.element;
            if (currNode.next) {
                stringToPrint += ', ';
                currNode = currNode.next;
            }
            else
                break;
        }
        stringToPrint += ' ]';
        console.log(stringToPrint);
    };
    return LinkedList;
}());
var list = new LinkedList();
for (var i = 0; i < 10; i++)
    list.add(i);
list.printList();
for (var i = 0; i < 5; i++)
    list.remove();
list.printList();
