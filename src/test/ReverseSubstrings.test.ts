import {describe, it} from "mocha";
import {assert} from "chai";
import ReverseSubstrings from "../algorithm/ReverseSubstrings";

describe('ReverseSubstring: reverseBetweenParens',()=>{

    it('should reverse a simple substring between two parentheses',()=>{
        const stringToReverse = '(abc)';
        const expected = 'cba';
        const testable: ReverseSubstrings = new ReverseSubstrings();
        const result = testable.reverseBetweenParens(stringToReverse);
        assert.equal(result,expected)
    })

    it('should be able to handle two sets of parentheses with a substring on the left hand side', ()=>{
        const stringToReverse = '(ed(abc))';
        const expected = 'abcde';
        const testable: ReverseSubstrings = new ReverseSubstrings();
        const result = testable.reverseBetweenParens(stringToReverse);
        assert.equal(result,expected)
    })

    it('should be able to handle two setse', ()=>{
        const stringToReverse = '(ed(abc))';
        const expected = 'abcde';
        const testable: ReverseSubstrings = new ReverseSubstrings();
        const result = testable.reverseParentheses(stringToReverse);
        assert.equal(result,expected)
    })
})