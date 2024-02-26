import {describe, it} from "mocha";
import {assert} from "chai";
import BullsAndCows from "../algorithm/299BullsAndCows";


describe('Bulls and Cows', ()=> {

    let testable: BullsAndCows;

    before(() => {
        testable = new BullsAndCows();
    })


    it('should given a simple one secret digit and one guess: result 0A1B', () => {
       //first test goes here

        const result = testable.getHint('1','1');
        const expected ='1A0B';
        assert.equal(result,expected)
    })


    it('given 2 digits, one digit in guess matching the position and the number in the secret: result 1A1B', () => {
        //first test goes here

        const result = testable.getHint('21','31');
        const expected ='1A0B';
        assert.equal(result,expected)
    })

    it('given 5 digits, one matching the number and position, another matching one of the numbers, and the rest matching none: result 1A1B', () => {
        //first test goes here

        const result = testable.getHint('51993','21885');
        const expected ='1A1B';
        assert.equal(result,expected)
    })

    it('given 5 digits, full match: result 0A5B', () => {
        //first test goes here

        const result = testable.getHint('12345','12345');
        const expected ='5A0B';
        assert.equal(result,expected)
    })

    it('given 5 digits, all cows: result 5A0B', () => {

        const result = testable.getHint('12345','54231');
        const expected ='0A5B';
        assert.equal(result,expected)
    })

    //"1123"
    //"0111"
    //if the number we are looking at is in a later position in the guess then we can safely remove an earlier
    //position in the secret.
    it('given 4 digits, overlaps should not be counted.: result 5A0B', () => {


        const result = testable.getHint('1123','0111');
        const expected ='1A1B';
        assert.equal(result,expected)
    })

    //"1122"
    //"1222".
    it('given 4 digits, overlaps should not be counted.: result 3A0B', () => {

        const result = testable.getHint('1122','1222');
        const expected ='3A0B';
        assert.equal(result,expected)
    })

    //1:0,1 2:2,3
    //1:0 2:1,2,3
    //check for matches get's you the bulls. then can pop the matching bulls
    //then the difference between the entries could lead to the cows.
    //113222
    //112242
    //1:0,1 2:3,4,5 3:2 -----> 1:[] 2:[4] 3:[2]
    //1:0,1 2:2,3,5 4:4 -----> 1:[] 2:[2] 4:[4]
    //so if the difference is zero, i think the length of the guess can be counted as number of cows.
    //what if the difference is not zero....
    //what if as an example s - 2:[4,5] and g - 2[6] ... that would be one cow as there is a leftover guess.
    //what if as an example s - 2:[4] and g - 2:[2,3,6] ... there would be one cow as there is a leftover secret.
    //so I believe that for any entry, we could take the size from the smallest array and that would be the number
    //of cows for a given entry. If they are even, it does not matter which is used but i will default to using secret.
    //the above i believe would only be the case if there is a leftovers in either. If there are no leftovers in the guess
    //no more cows for that digit. and if there are no more in the secret, also the case.
    // Map(2) { '1' => [ 0, 1 ], '2' => [ 2, 3 ] }
    // Map(2) { '1' => [ 0 ], '2' => [ 1, 2, 3 ] }





})