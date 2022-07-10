import {describe, before, it} from 'mocha';
import {assert} from 'chai';
import LRUCache from "../datastructure/LRUCache";

describe('Least Recently Used (LRU) Cache', ()=>{
    it('should be able to set the capacity for the cache',()=>{
        const lru = new LRUCache(1);
        assert.equal(lru.capacity, 1)
    })

    it('should be able to add a value to the cache and retrieve it', ()=>{
        const lru = new LRUCache(1);
        lru.put(1,1);
        assert.equal(lru.get(1),1);
    })

    it('with a capacity of one, the lru should evict any values in the cache',()=>{
        const lru = new LRUCache(1);
        lru.put(1,1);
        lru.put(2,2);
        assert.equal(lru.get(2),2);
        assert.equal(lru.get(1),-1);
    })

    it('should pass the basic full test',()=>{
        const lru = new LRUCache(2); //null
        lru.put(1,1); //null
        lru.put(2,2); //null
        lru.get(1);  //1
        lru.put(3,3); //null
        lru.get(2); // -1
        assert.equal(lru.get(2),-1);
        lru.put(4,4);
        lru.get(1);
        lru.get(3);
        lru.get(4);

    })


    it('should pass the 14th test',()=>{
        const lru = new LRUCache(2); //null
        lru.get(2); // -1
        lru.put(2,6); //null
        lru.get(1);
        lru.put(1,5);
        lru.put(1,2);
        assert.equal(lru.get(1),2);
        assert.equal(lru.get(2),6);
    })

    it('should pass the 14th test',()=>{
        const lru = new LRUCache(2); //null
        lru.put(2,1); //null
        lru.put(1,1); //null
        lru.put(2,3); //null
        lru.put(4,1); //null
        assert.equal(lru.get(1),-1);
        assert.equal(lru.get(2),3);
    })
})
