const linkedList = new LinkedList();

    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);

    linkedList.unshift(5);
    linkedList.unshift(1);

    linkedList.insert(2, 15);
    linkedList.remove(4);

    linkedList.reverse();

    const outputElement = document.getElementById("output");
    let current = linkedList.head;
    while (current) {
        const li = document.createElement("li");
        li.innerText = current.data;
        outputElement.appendChild(li);
        current = current.next;
    }

