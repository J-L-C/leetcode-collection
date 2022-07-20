import {describe, it} from "mocha";
import {assert} from "chai";
import NumberOfMatchingSubsequences from "../algorithm/NumberOfMatchingSubsequences";

describe('NumberOfMatchingSubsequences', () => {

    let solution: NumberOfMatchingSubsequences;

    before(() => {
        solution = new NumberOfMatchingSubsequences();
    })

    describe('countMatchingSubsequences',()=>{
        it('when the words list is empty the matching count should be zero', () => {
            const sentence: string = "abcde";
            const words: string[] = [];
            assert.equal(solution.countMatchingSubsequences(sentence,words),0);
        });
        it('when the words list is empty the matching count should be zero', () => {
            const sentence: string = "abcde";
            const words: string[] = [];
            assert.equal(solution.countMatchingSubsequences(sentence,words),0);
        });
    });
});