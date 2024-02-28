function submitLastNumber() {

    lastNumber = document.getElementById("addLastNumber")

    class Node {
        constructor(addLastNumber) {
            this.addLastNumber = addLastNumber
            this.next = null
        }
    }

    class SinglyLinkedList {
        constructor() {
            this.head = head
            this.tail = tail  
            this.length = length
        }
    

    push(addLastNumber) {

        let newNode = new Node(addLastNumber)

        if(!this.head) {
            this.head = newNode
            this.tail = this.tail 
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }

    }
}