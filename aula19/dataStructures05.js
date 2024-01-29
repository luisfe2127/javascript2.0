
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

   pop(count = 1) {
    if (!this.head || count <= 0) return undefined;

    let current = this.head;
    let newTail = current;

    // Encontrar o novo tail após a remoção de n nós
    for (let i = 0; i < count && current.next; i++) {
        newTail = current;
        current = current.next;
    }

    // Atualizar o tail e o next do novo tail
    this.tail = newTail;
    this.tail.next = null;

    this.length -= count;

    // Atualizar head e tail se a lista estiver vazia
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }

    return current;
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
    }

    const myList = new SinglyLinkedList();

    myList.push(10).push(20).push(30).push(40).push(50)

    myList.shift()
    myList.shift()

    myList.unshift(20).unshift(10)

    myList.set(1, 25)

    console.log(myList);

    let nodeVal2 = myList.get(4)

    console.log(`Utilizando o metodo get, o valor imprimido será: ${nodeVal2.val}`)
    

    