class Graph {

    constructor() {

        this.adjacencyList = {}
    }

    addNode(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }
    }

    addConection(node1, node2) {
        this.addNode(node1)
        this.addNode(node2)

        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }

    removeConnection(node1, node2) {
        if(!this.adjacencyList[node1] || !this.adjacencyList[node2]) return

        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v = v !== node2)

        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v = v !== node1)

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

function updateDisplay() {
    const displayList = document.getElementById("displayList");
    displayList.innerHTML = ""; 

    for (let value in matrix.adjacencyList) {
        displayList.innerHTML += value + ": " + matrix.adjacencyList[value].join(", ") + "<br>";
    }

}


function submitAddVal() {
    const value = document.getElementById("addVal").value;
    matrix.addNode(value);

    updateDisplay();
}

function addConection() {

    let valDad = document.getElementById("addConectionDad").value
    let valNewSon = document.getElementById("addConectionSon").value

    matrix.insert(valDad, valNewSon)
}

function removeConnection() {

    let valDad = document.getElementById("unlinkConectionDad").value
    let valSon = document.getElementById("unlinkConectionSon").value

    matrix.remove(valDad, valSon)
    
}

function removeNode() {

    let valDad = document.getElementById("unlinkVal").value

    matrix.remove(valDad)
}



