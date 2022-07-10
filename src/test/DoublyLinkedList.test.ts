import {describe, it} from "mocha";
import DoublyLinkedList from "../datastructure/DoublyLinkedList";
import {assert} from "chai";
import Node from '../datastructure/Node'

describe('Doubly Linked List', ()=>{

    it('should be able to prepend values to the list, size should increase also',()=>{
        const dll: DoublyLinkedList = new DoublyLinkedList();
        const result: Node = dll.prepend('key','123');
        assert.equal(result.value, '123');
    })

    it('should be able to prepend values to the list and update the first value',()=>{
        const dll: DoublyLinkedList = new DoublyLinkedList();
        dll.prepend('key','123');
        assert.equal(dll.getFirst().value, '123');
        dll.prepend('key','345');
        assert.equal(dll.getFirst().value, '345');
        dll.prepend('key','115');
        assert.equal(dll.getFirst().value, '115');
    })

    it('should be able to append values to the list, size should increase also',()=>{
        const dll: DoublyLinkedList = new DoublyLinkedList();
        const result: Node = dll.append('key','123');
        assert.equal(result.value, '123');
    })

    it('should give you information about the size of itself', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        assert.equal(dll.getSize(), 1);
    })

    it('should be able to look at the first element in the list', ()=>{
        const dll = new DoublyLinkedList();
        const result = dll.append('key','123');
        dll.append('key','345');
        assert.equal(dll.getFirst(),result);
    })

    it('should be able to look at the last element in the list', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        const result = dll.append('key','345');
        assert.equal(dll.getLast(),result);
    })


    it('should be able to append multiple entries to the linked list', () =>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.append('key','345');
        const result = dll.append('key','789');
        assert.equal(dll.getLast(), result);
    })


    it('should be able to remove the last element from the list and the last element should be updated to the previous entry, if it exists', () =>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        const result = dll.append('key','345');
        dll.append('key','789');
        dll.removeLast();
        assert.equal(dll.getLast(), result);
    })

    it('should decrease in size when the last element is removed', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.append('key','345');
        dll.append('key','789');
        dll.removeLast();
        assert.equal(dll.getSize(), 2);
    })


    it('should be able to handle removing the last item in the list', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.removeLast();
        assert.equal(dll.getSize(), 0);
        assert.equal(dll.getLast(),null);
        assert.equal(dll.getFirst(),null);
    })

    it('should be able to handle all the items in a list being removed', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.append('key','123');
        dll.append('key','123');
        dll.append('key','123');
        dll.append('key','123');
        dll.removeLast();
        dll.removeLast();
        dll.removeLast();
        dll.removeLast();
        dll.removeLast();
        assert.equal(dll.getSize(), 0);
        assert.equal(dll.getLast(),null);
        assert.equal(dll.getFirst(),null);
    })

    it('should be able to handle attempting to remove an item in an empty list', ()=>{
        const dll = new DoublyLinkedList();
        dll.removeLast();
        dll.removeLast();
        assert.equal(dll.getSize(), 0);
        assert.equal(dll.getLast(),null);
        assert.equal(dll.getFirst(),null);
    })

    it('should be able to move a middle node to the head position', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.append('key','345');
        const nodeToMove = dll.append('key','789');
        dll.append('key','101112');
        dll.moveTop(nodeToMove);
        assert.equal(dll.getFirst(), nodeToMove);
    })

    it('should be able to move the last node to the head position and last position get updated with the next to last', ()=>{
        const dll = new DoublyLinkedList();
        dll.append('key','123');
        dll.append('key','345');
        const newLastNode = dll.append('key','789');
        const nodeToMove = dll.append('key','101112');
        dll.moveTop(nodeToMove);
        assert.equal(dll.getLast(), newLastNode);
    })

    it('should be able handle when head is passed in and not move anything', ()=>{
        const dll = new DoublyLinkedList();
        const nodeToMove = dll.append('key','123');
        dll.append('key','345');
        dll.append('key','789');
        dll.append('key','101112');
        dll.moveTop(nodeToMove);
        assert.equal(dll.getFirst(), nodeToMove);
    })

    it('should be able to handle the move when there is a list size of two', ()=>{
        const dll = new DoublyLinkedList();
        const newTail = dll.append('key','123');
        const nodeToMove =  dll.append('key','345');
        dll.moveTop(nodeToMove);
        assert.equal(dll.getFirst(), nodeToMove);
        assert.equal(dll.getLast(), newTail);
    })

})