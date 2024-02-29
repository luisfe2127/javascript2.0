class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adicionar ao final da lista
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        this.displayList();
    }

    // Adicionar no início da lista
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        this.displayList();
    }

    // Remover do início da lista
    shift() {
        if (!this.head) return undefined;
        const removed = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        this.displayList();
        return removed;
    }

    // Inserir em uma posição específica
    insert(position, value) {
        if (position < 0 || position > this.length) {
            console.error('Posição inválida');
            return;
        }
        if (position === 0) {
            this.unshift(value);
        } else if (position === this.length) {
            this.push(value);
        } else {
            const newNode = new Node(value);
            let current = this.head;
            let prev = null;
            let index = 0;
            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = newNode;
            newNode.next = current;
            this.length++;
            this.displayList();
        }
    }

    // Remover da posição específica
    remove(position) {
        if (position < 0 || position >= this.length) {
            console.error('Posição inválida');
            return;
        }
        let current = this.head;
        let prev = null;
        let index = 0;
        if (position === 0) {
            return this.shift();
        } else if (position === this.length - 1) {
            return this.pop();
        } else {
            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next;
            this.length--;
            this.displayList();
            return current;
        }
    }

    // Obter valor da posição específica
    get(position) {
        if (position < 0 || position >= this.length) {
            console.error('Posição inválida');
            return;
        }
        let current = this.head;
        let index = 0;
        while (index < position) {
            current = current.next;
            index++;
        }
        this.displayList();
        return current;
    }

    // Alterar valor da posição específica
    set(position, value) {
        const node = this.get(position);
        if (node) {
            node.value = value;
            this.displayList();
            return true;
        }
        return false;
    }

    // Remover do final da lista
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        this.displayList();
        return current;
    }

    // Imprimir lista
    displayList() {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        document.getElementById('res').innerHTML = `<p>${list.join(' -> ')}</p>
            <p>Head: ${this.head ? this.head.value : 'null'}</p>
            <p>Tail: ${this.tail ? this.tail.value : 'null'}</p>
            <p>Length: ${this.length}</p>`;
    }
}

const list = new LinkedList();

function addValue() {
    const value = document.getElementById('addValue').value;
    list.push(value);
}

function removeFromStart() {
    list.shift();
}

function removeFromEnd() {
    list.pop();
}

function removeByPosition() {
    const position = document.getElementById('removePosition').value;
    list.remove(position);
}

function getValueByPosition() {
    const position = document.getElementById('getPosition').value;
    list.get(position);
}

function changeValueByPosition() {
    const position = document.getElementById('changePosition').value;
    const newValue = document.getElementById('newValue').value;
    list.set(position, newValue);
}




