//push: acrescenta +1
//pop: reduz -1 (topo da pilha)
//peek: devolve o elemento que estava na pilha +1
//isEmpty: informa se está vazia ou não
//clear: limpa a pilha 
//size: informa o tamanho da pilha 
//print: mostrar pilha no console 

function Stack() {
    let items = []
    
    this.push = function(element) {
        items.push(element)
    }

    this.pop = function() {
        return items.pop()
    }

    this.peek = function() {
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() { 
        items = []
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

let pilha = new Stack()

pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

console.log(pilha.peek())
