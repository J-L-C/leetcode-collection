import {describe, it} from "mocha";
import {assert} from "chai";
import PalindromeNumber from "../algorithm/PalindromeNumber";

describe('PalindromeNumber', () => {

    let palindromeNumber: PalindromeNumber;

    before(()=>{
        palindromeNumber = new PalindromeNumber();
    })
    describe('isPalindromeNumber',()=>{

        it('should return TRUE given a single digit number', () => {
            assert.equal(palindromeNumber.isPalindrome(1),true);
        });

        it('should return FALSE given the number 10 as it IS NOT a palindrome', () => {
            assert.equal(palindromeNumber.isPalindrome(10),false);
        });

        it('should return TRUE given the number 101 as it IS a palindrome', () => {
            assert.equal(palindromeNumber.isPalindrome(101),true);
        });

        it('should return FALSE given the number 123 as it IS NOT a palindrome', () => {
            assert.equal(palindromeNumber.isPalindrome(123),false);
        });

    })

})