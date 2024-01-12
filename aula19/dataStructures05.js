const obj1 = {
    data: 1000
};

const obj2 = {
    data: 2000
};

obj1.next = obj2

console.log(obj1)




class Node {
    constructor(val) {
        this.val = val
        this.next = null 
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0
    }

}