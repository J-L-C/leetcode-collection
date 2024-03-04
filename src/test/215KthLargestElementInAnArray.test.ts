import {describe, it} from "mocha";
import RangeSumOfBST from "../algorithm/Trees/RangeSumOfBST";
import {assert} from "chai";
import KthLargestElementInAnArray from "../algorithm/215KthLargestElementInAnArray";

describe('215 Kth Largest Element In An Array', () => {

    let testable: KthLargestElementInAnArray;

    beforeEach(()=>{
        testable = new KthLargestElementInAnArray();
    })

    it('Should return value 99 when k is 1 and the array size is 1 as it will be the largest value in the array', () => {

        const nums = [99];
        const k = 1;
        const expected = 99;

        assert.equal(testable.findKthLargest(nums,k),expected);

    })

})
