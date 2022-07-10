import DoublyLinkedList from "./DoublyLinkedList";
import Node from '../datastructure/Node'

class LRUCache{

    public capacity: number = 0;
    public size: number = 0;
    public cache: Map< String | number, Node> = new Map();
    private dll: DoublyLinkedList;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.dll = new DoublyLinkedList();
    }

    get(key: String|number): String | number{
        if(this.cache.has(key)){
            this.dll.moveTop(this.cache.get(key));
            return this.cache.get(key).value;
        }

        return -1;
    }

    put(key: String|number, value: String|number): void{

        if(this.cache.has(key)){
            this.cache.get(key).value = value;
            this.dll.moveTop(this.cache.get(key))
            return;
        }
        if(this.size < this.capacity){
            this.cache.set(key,this.dll.prepend(key,value));
            this.size++;
            return;
        }
        const nodeToRemove = this.dll.removeLast();
        this.cache.delete(nodeToRemove.key);
        this.cache.set(key,this.dll.prepend(key,value));

    }


}

export default LRUCache;