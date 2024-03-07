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
        this.addNode(value)
        this.addNode(value2)

        this.adjacencyList[value].push(value2)
    
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

//ADICIONAR UM NÓ

function updateDisplay01() {
    const displayList = document.getElementById("displayList");
    displayList.innerHTML = ""; 

    for (let value in matrix.adjacencyList) {
        displayList.innerHTML += value + ": " + matrix.adjacencyList[value].join(", ") + "<br>";
    }

}

function submitAddVal() {
    const value = document.getElementById("addVal").value;
    matrix.addNode(value);

    updateDisplay01();
}

//ADICIONAR UMA CONEXÃO

function updateDisplay02() {
    const displayList = document.getElementById("displayList");
    displayList.innerHTML = ""; 
   // let current = length > adjacencyList[value] 

    if(value === value || value === null) {
        displayList.innerHTML += matrix.adjacencyList[value] + value2 + ", "

       /* while(current !== null) {
            current = current.next
            delete current 

            if(current == null) break
            
        }*/
    }

}

function submitAddConection() {

    let value = document.getElementById("addConectionDad").value
    let value2 = document.getElementById("addConectionSon").value

    matrix.addConection(value, value2)
    updateDisplay02()
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



