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

        pop() {
            if (this.head === null) return undefined;

            const removedNodeValue = this.head.value;
            this.head = this.head.nextNode;
            return removedNodeValue;
        },

        contains(value) {
            let currentNode = this.head;

            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true;
                }

                currentNode = currentNode.nextNode;
            }

            return false;
        },

        findIndex(value) {
            let currentNode = this.head;
            let index = 0;

            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return index;
                }
                index++;
                currentNode = currentNode.nextNode;
            }

            return -1;
        },

        toString() {
            if (this.head === null) return "";
            let currentNode = this.head;
            let string = "";

        
            while (currentNode !== null) {
                string += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            }

            return string + "null"
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

console.log(list.toString());