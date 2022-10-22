import {describe, it} from "mocha";
import {assert} from "chai";
import GroupAnagrams from "../algorithm/49GroupAnagrams";

describe('Grouping Anagrams', () => {

    let testable: GroupAnagrams;

    before(() => {
        testable = new GroupAnagrams();
    })

    describe('sortString',()=>{
        it('should sort a string alphabetically', () => {
            let sortMe: string = 'cba'
            let expected: string = 'abc'
            let actual = testable.sortString(sortMe)
            assert.equal(actual,expected)
        })
    })

    describe('group',()=>{
        it('return the same list if no anagrams can be grouped',()=>{
            let noRelatedAnagrams = ['ate','balloon'];
            let expectedGroupings = [['ate'],['balloon']];
            let actualGroupings: string[][] = testable.group(noRelatedAnagrams);
            assert.deepEqual(actualGroupings,expectedGroupings);
        })

        it('returns a 2 element list of group anagrams [[eat,ate]]',()=>{
            let noRelatedAnagrams = ['ate','balloon','eat','tea','apple','tab','bat']
            let expectedGroupings = [["ate","eat","tea",],["balloon"],["apple"],["tab","bat"]]
            let actualGroupings: string[][] = testable.group(noRelatedAnagrams);
            assert.deepEqual(actualGroupings,expectedGroupings)

        })
    })

})