//LISTA INDIVIDUALMENTE VINCULADAS 

class Node{

    constructor(val){
        this.val = val
        this.next = null
    }
}


class SinglyLinkedList{
    
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    push(val) {
        const newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next

        this.length--

        if(this.length === 0) {
            this.tail = null
        }
    }

    unshift(val) {
        const newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head 
        }

        newNode.next = this.head
        this.head = newNode 

        this.length++

        return this
     }

     get(index) {
        if(index < 0 || index >= this.length) return null

        let current = this.head 
        let counter = 0

        while(counter !== index) {
            current = current.next
            counter++
        }
        return current 
     }

     set(index, val) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val
            return true
        } else {
            return false 
        }
     }

     insert(index, val) {
        if(index < 0 || index > this.length) return false 
        if(index === this.length) return ! !this.push(val)
        if(index === 0) return ! !this.unshift(val)

        const newNode = new Node(val)
        const prev = this.get(index - 1)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp 
        this.length++

        return true
     }

     remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index > this.length) return this.get(index - 1)
        if(index === 0) return this.shift()

        const previousNode = this.get(index - 1)
        const remove = previousNode.next
        previousNode.next = remove.next
        this.length--

        return remove
     }

     reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null

        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
     }
    }

    const myList = new SinglyLinkedList();

    myList.push(10).push(20).push(30).push(40).push(50)

    myList.shift()
    myList.shift()

    myList.unshift(20).unshift(10)

    myList.set(1, 25)

    myList.reverse()


    console.log(myList);

    let nodeVal2 = myList.get(4)

    console.log(`Utilizando o metodo get, o valor imprimido será: ${nodeVal2.val}`)
    

    