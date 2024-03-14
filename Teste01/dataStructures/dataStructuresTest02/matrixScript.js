class Graph {

    constructor() {
        this.adjacencyList = {}
    }

    addNode(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = []
        }
    }

    addConnection(value, value2) {
        this.adjacencyList[value].push(value2)
    }

    removeConnection(value, value2) {
        if(!this.adjacencyList[value] || !this.adjacencyList[value2]) return

        this.adjacencyList[value] = this.adjacencyList[value].filter(v => v !== value2)

        this.adjacencyList[value2] = this.adjacencyList[value2].filter(v => v !== value)    
    }

    removeNode(node) {
        while(this.adjacencyList[node] != null) {

            let adjacentNode = this.adjacencyList[node].push
            if(adjacentNode == null) break;

            this.removeConnection[node, adjacentNode]
        }
        delete this.adjacencyList[node]
    }
}

let matrix = new Graph()

//ADICIONAR UM NÓ

function updateDisplay() {
    const displayList = document.getElementById("displayList")
    displayList.innerHTML = "";

        for (let value in matrix.adjacencyList) {
        displayList.innerHTML += value + ": " + matrix.adjacencyList[value].join(", ") + "<br>";
    }
}

function submitAddVal() {
    const value = document.getElementById("addVal").value
    matrix.addNode(value)

    updateDisplay()
}

//ADICIONAR UMA CONEXÃO

function submitAddConnection() {

    let value = document.getElementById("addConnectionDad").value
    let value2 = document.getElementById("addConnectionSon").value
    matrix.addConnection(value, value2)
    
    updateDisplay()
}

//REMOVER UMA CONEXÃO

function submitUnlinkConnection() {

        let value = document.getElementById("unlinkConnectionDad").value
        let value2 = document.getElementById("unlinkConnectionSon").value
        matrix.removeConnection(value, value2)

        updateDisplay()
}