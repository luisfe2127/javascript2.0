class Graph {

    constructor() {

        this.adjacencyList = {}
    }

    addNode(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }
    }

    addConection(value, value2) {

        this.adjacencyList[value].push(value2)
    
    }

    removeConnection(value, value2) {
        if(!this.adjacencyList[value] || !this.adjacencyList[value2]) return

        this.adjacencyList[value] = this.adjacencyList[value].filter(v => v !== value2)

        this.adjacencyList[value2] = this.adjacencyList[value2].filter(v => v !== value);     

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

//ADICIONAR UMA CONEXÃO

function updateDisplay02() {
    const displayList = document.getElementById("displayList");
    
    if(value === value) {
        displayList.innerHTML += matrix.adjacencyList[value] + value2 + ", " 
    }

}

function submitAddConection() {

    let value = document.getElementById("addConectionDad").value
    let value2 = document.getElementById("addConectionSon").value

    matrix.addConection(value, value2)
    updateDisplay()

//REMOVER UMA CONEXÃO

}

function updateDisplay03() {
    const displayList = document.getElementById("displayList");
    if (value === value || value2 === value2) { 

        
    }

}

function submitUnlinkConection() {

        let value = document.getElementById("unlinkConectionDad");
        let value2 = document.getElementById("unlinkConectionSon");
    
        matrix.removeConnection(value, value2);
        updateDisplay();

}












/*function removeNode() {

    let valDad = document.getElementById("unlinkVal").value

    matrix.remove(valDad)
}*/



