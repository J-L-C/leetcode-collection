import {describe, it} from "mocha";
import {assert} from "chai";
import SubarraySum from "../algorithm/SubarraySum";

describe('subarraySum problem: findAllOccurrencesOfSum', ()=> {

    // 7 + 5 + 3 / 5
    it('when given an array with 0 elements, return 0 as the result', () => {
        const arr: number[] = []
        const expected: number = 0
        const divisibleBy = 9
        const testable: SubarraySum = new SubarraySum();
        const result = testable.findAllOccurrencesOfSum(arr, divisibleBy)
        assert.equal(result, expected)
    })

    it('when given an array with 0 elements, return 0 as the result', () => {
        const arr: number[] = [3,4,7,2,-3,1,4,2]
        const expected: number = 4
        const target = 7
        const testable: SubarraySum = new SubarraySum();
        const result = testable.findAllOccurrencesOfSum(arr, target)
        assert.equal(result, expected)
    })

    it('when given an array with [1,2,3], return 2 as the result', () => {
        const arr: number[] = [1,2,3]
        const expected: number = 2
        const target = 3
        const testable: SubarraySum = new SubarraySum();
        const result = testable.findAllOccurrencesOfSum(arr, target)
        assert.equal(result, expected)
    })

})