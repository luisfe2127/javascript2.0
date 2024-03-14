class Graph {

    constructor() {
        this.adjacencyList = {}
    }


    addNode(node) {

        if(!this.adjacencyList[node]) this.adjacencyList[node] = []
    }

    addConnection(node, node2) {

        this.addNode(node)
        this.addNode(node2)

        this.adjacencyList[node].push(node2)
        this.adjacencyList[node2].push(node)
    }

    removeConnection(node1, node2) {

        if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) return;


        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2)

        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1)
    }

    removeNode(node) {
        while (this.adjacencyList[node] != null) {
            const adjacentNode = this.adjacencyList[node].pop();
            if (adjacentNode == null) break;
            this.removeConnection(node, adjacentNode);
        }
        delete this.adjacencyList[node];
    }
    }



let local = new Graph()

local.addNode("Brasil")
local.addConnection("Brasil", "Rondonia")
local.addConnection("Brasil", "India")
local.addConnection("Brasil", "China")
local.addConnection("Brasil", "South Africa")
local.addConnection("Brasil", "EUA")
local.removeConnection("Brasil", "EUA")
local.addConnection("Brasil", "Inglaterra")

console.log(local)