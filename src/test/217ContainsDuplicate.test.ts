import {describe, it} from "mocha";
import {assert} from "chai";
import ContainsDuplicate from "../algorithm/217ContainsDuplicate";


describe('Contains Duplicates', () => {

    let solution: ContainsDuplicate;

    before(() => {
        solution = new ContainsDuplicate();
    })

    it('returns false with a single value given as it is the only value in the list', () => {

        const input = [1]
        const result = solution.doesContainDuplicates(input);
        const expected = false;
        assert.equal(result, expected)
    })

    it('returns false if there are multiple values in the list that are unique', ()=>{

        const input = [1,2,3,4]
        const result = solution.doesContainDuplicates(input);
        const expected = false;
        assert.equal(result, expected)
    })


    it('returns true if there are duplicates in the list', ()=>{

        const input = [1,2,3,4,4,4,5,5,5]
        const result = solution.doesContainDuplicates(input);
        const expected = true;
        assert.equal(result, expected)
    })

})