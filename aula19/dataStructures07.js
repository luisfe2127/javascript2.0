//ARVORE BINARIA

class Node {

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }


push(value) {

    const newNode = new Node(value)

    if(value === null) {
        this.root = newNode
        return this
    }

    let current = this.root

    while(true) {
        if(value === current.value) return undefined
        if(value < current.value) {
            if(value === null) {
                this.left = newNode
                return this
            } 
                current = current.left
            } else {
                if(this.right === null) {
                    this.right = newNode
                    return this
                }
            } 
                current = current.right 
            }
        }

        get(value) {

            if(this.root === null) return undefined

            let current = this.root, found = false

            while(current && !found) {
                if(value < current.value) {
                    current = current.left
                } else if (value > current.value) {
                    current = current.right
                } else {
                    found = true
                }

                if(!found) return undefined
                return current
            }
        }
    }

    

