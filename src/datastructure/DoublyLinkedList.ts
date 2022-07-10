import Node from '../datastructure/Node'

class DoublyLinkedList{

    private size: number = 0;
    private head: Node;
    private tail: Node;

    constructor() {
    }

    public getSize(): number{
        return this.size;
    }

    prepend(key: String | number,value: String | number): Node{

        if (this.head == null)
            return this.append(key,value)

        let newNode = new Node(key, value, this.head, null)
        if(this.tail == null){
            this.tail = this.head;
        }

        this.head.prev = newNode;
        this.head = newNode;
        this.size++;

        return newNode;
    }
    //append - add to the end of the list and return the created node
    append(key: String | number,value: String | number): Node{

        this.size++;
        if(this.head == null){
            this.head = new Node(key, value, null, null);
            return this.head;
        }

        if(this.tail == null){
            this.tail = new Node(key, value, null, this.head);
            this.head.next = this.tail;
            return this.tail;
        }

        let newNode = new Node(key, value, null, this.tail)
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;

    }

    //ok so we are going to add a prepend to the functions.
    //remove the remove last and update it to remove a given node instead;
    //we are going to get rid of moveTop.

    //moveToHead - take a node and move it to the top of the list and return the node
    public moveTop(node:Node): void{

        if(node.prev === null)
            return;
        if(node.next === null){
            const newTail = node.prev;
            node.next = this.head;
            this.head.prev = node;
            newTail.next = null;
            this.head = node;
            this.tail = newTail;
            return;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = this.head;
        node.prev = null;
        this.head.prev = node;
        this.head = node;
    }
    //getFirst - return the head of the list
    public getFirst(): Node{
        return this.head;
    }

    //getLast - return the last of the list
    public getLast(): Node{
        return this.tail;
    }

    //removeLast - remove the last element in the list void? or return node?
    public removeLast(): Node{

        if(this.size === 0)
            return this.head;

        if(this.size === 1){
            const temp = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return temp;
        }
         this.size--;
         const tempTail = this.tail;
         const prev = tempTail.prev;
         prev.next = null;
         this.tail = prev;
         return tempTail;
    }
}

export default DoublyLinkedList;