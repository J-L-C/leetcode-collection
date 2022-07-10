import {describe, it} from "mocha";
import {assert} from "chai";
import DivisibleByK from "../algorithm/DivisibleByK";


describe('DivisibleByK problem: findAllSumsDivisibleBy', ()=>{

    // 7 + 5 + 3 / 5
    it('when given an array with 0 elements, return 0 as the result',()=>{
        const arr: number[] = []
        const expected: number = 0
        const divisibleBy = 9
        const testable: DivisibleByK = new DivisibleByK();
        const result = testable.findAllSumsDivisibleBy(arr, divisibleBy)
        assert.equal(result,expected)
    })

    it('when given an array with [1,2] elements and divisor of 1, return 3 as the result',()=>{
        const arr: number[] = [1,2]
        const expected: number = 3
        const divisibleBy = 1
        const testable: DivisibleByK = new DivisibleByK();
        const result = testable.findAllSumsDivisibleBy(arr, divisibleBy)
        assert.equal(result,expected)
    })

    it('when given an array with [4,5,0,-2,-3,1] elements and divisor of 5, return 7 as the result',()=>{
        const arr: number[] = [4,5,0,-2,-3,1]
        const expected: number = 7
        const divisibleBy = 5
        const testable: DivisibleByK = new DivisibleByK();
        const result = testable.findAllSumsDivisibleBy(arr, divisibleBy)
        assert.equal(result,expected)
    })

    it('when given an array with [] elements and divisor of 5, return 0 as the result',()=>{
        const arr: number[] = []
        const expected: number = 0
        const divisibleBy = 5
        const testable: DivisibleByK = new DivisibleByK();
        const result = testable.findAllSumsDivisibleBy(arr, divisibleBy)
        assert.equal(result,expected)
    })

    it('when given an array with [] elements and divisor of 5, return 0 as the result',()=>{
        const arr: number[] = [1,90,2,3,4,5]
        const expected: number = 21
        const divisibleBy = 1
        const testable: DivisibleByK = new DivisibleByK();
        const result = testable.findAllSumsDivisibleBy(arr, divisibleBy)
        assert.equal(result,expected)
    })

})