class Node{
    key: String | number;
    value: String | number;
    next: Node;
    prev: Node;

    constructor(key: String | number,value: String | number, next: Node, prev: Node) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

}

export default Node;