import {describe, it} from "mocha";
import {assert} from "chai";
import Subsequence from "../algorithm/Subsequence";

/*
* Given two strings s and t, return true if s is a
* subsequence of t, or false otherwise.
* A subsequence of a string is a new string that is formed from
* the original string by deleting some (can be none) of the
* characters without disturbing the relative positions of the
* remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*
*/
describe('Subsequence', () => {

    let solution: Subsequence;

    before(() => {
        solution = new Subsequence();
    })

    it('should return true if the subsequence is empty', () => {
        let targetString: string = "abcdef";
        let subString: string = "";
       assert.equal(solution.isSubsequence( targetString , subString ), true);
    })

    it('should return true if the subsequence being sought is a single character', () => {
        let targetString: string = "abcdef";
        let subString: string = "b";
        assert.equal(solution.isSubsequence( targetString , subString ), true);
    })

    it('should return true if the subsequence being sought is a has two matching characters that fall in sequence', () => {
        let targetString: string = "abcdef";
        let subString: string = "be";
        assert.equal(solution.isSubsequence( targetString , subString ), true);
    })


    it('should return false if the subsequence being sought is not a subsequence such as eb in abcdef since it is not in order', () => {
        let targetString: string = "abcdef";
        let subString: string = "eb";
        assert.equal(solution.isSubsequence( targetString , subString ), false);
    })

})