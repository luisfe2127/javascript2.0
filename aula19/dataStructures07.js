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

    if(this.root === null) {
        this.root = newNode
        return this
    }

    let current = this.root

    while(true) {
        if(current === null || value === current.value) return undefined

        if(value < current.value) {
            if(current.left === null) {
                current.left = newNode
                return this
            } 
                current = current.left
            } else {
                if(current.right === null) {
                    current.right = newNode
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
                    break
                }
            }
            return found ? current.value : undefined
        }

    }

    const arvore = new BinarySearchTree();

    arvore.push(10)
    arvore.push(5)
    arvore.push(15)
    arvore.push(2)
    arvore.push(17)
    arvore.push(14)
    arvore.push(13)

    console.log(arvore)

    console.log(arvore.get(90))
    

    

