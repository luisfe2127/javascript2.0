//LISTA DUPLAMENTE ENCADEADA

class Node {

    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }



    pop() {
        if(!this.head) return undefined;

        let poppedNode = this.tail

        if (this.length === 1 ) {
            this.head = null
            this.tail = null
        } else {
            this.thail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        
        this.length--
        return poppedNode
    }
}
