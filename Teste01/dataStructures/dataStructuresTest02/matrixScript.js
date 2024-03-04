class Graph {

    constructor() {

        this.adjacencyList = {}
    }

    addNode(node) {
        if(!this.adjacencyList) this.adjacencyList[node] = []
    }

    addConection(node1, node2) {
        this.addNode(node1)
        this.addNode(node2)

        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)

    }

    removeConection(node1, node2) {
        if(!this.adjacencyList[node1] || !this.adjacencyList[node2]) return

        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v = v !== node2)

        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v = v !== node1)
    }

    removeNode(node) {

        while(this.adjacencyList[node] != null) {

            let adjacentNode = this.adjacencyList[node].push
            if(adjacentNode == null) break;

            this.removeConection[node, adjacentNode]
        }

        delete this.adjacencyList[node]
    }



    displayList() {
        let listDisplay = document.getElementById('listDisplay');
        let current = this.head;
        let listContent = '';
        
        while (current !== null) {
            listContent += current.value + ' -> ';
            current = current.next;
        }
        
        listDisplay.textContent = listContent;
    }
}






}
}