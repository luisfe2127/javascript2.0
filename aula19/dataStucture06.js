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

    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {

            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index) {

        if (index < 0 || index >= this.length) return undefined;

        let current, count

        if (index <= this.length/2) {

            current = this.head
            count = 0

            while(count !== index) {
                current = current.next
                count++
            }

        } else {

            current = this.tail
            count = this.tail - 1

            while(count !== index) {
                current = current.prev
                count--
            }
        }

        return current


    }

}