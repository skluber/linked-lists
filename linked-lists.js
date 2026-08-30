const createLinkedList = () => {
    return {
        head: null,

        append(value) {
            if (this.head === null) {
                this.head = createNode(value);
            } else {
                const newNode = createNode(value);
                const lastNode = this.findLastNode(this.head);
                lastNode.nextNode = newNode;
            }
        },

        findLastNode(node){
            if (node === null) {
                return null;
            }

            if (node.nextNode === null) {
                return node;
            } 

            return this.findLastNode(node.nextNode);
        },

        prepend(value) {
            const newNode = createNode(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        },

        size() {
            const countNodes = (node) => {
                if (node === null) return 0;
                return 1 + countNodes(node.nextNode);
            }

            return countNodes(this.head);
        },

        headNode() {
            if (this.head === null ) return undefined;
            return this.head
        },

        tail() {
            if (this.head === null ) return undefined;
            return this.findLastNode(this.head);
        },

        at(index) {
            if (index < 0) return undefined;
            if (this.head === null) return undefined;   

            let foundNode = this.head;
            for (let i = 0; i < index; i++) {
                if (foundNode === null) return undefined;
                foundNode = foundNode.nextNode;
            }

            return foundNode.value;
        },
    }
}

const createNode = (value) => {
    return {
        value, 
        nextNode: null,
    }
}

const list = createLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
console.log("Size is: ", list.size());
console.log("Head is; ", list.headNode());
console.log("Tail is; ", list.tail());
console.log("Node at index 1 is; ", list.at(1));

console.dir(list, { depth: null });