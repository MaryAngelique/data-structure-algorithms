// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        
        return null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }
}

module.exports = { Node, LinkedList };
