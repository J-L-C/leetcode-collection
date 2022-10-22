import {describe, it} from "mocha";
import {assert} from "chai";
import PathSum from "../algorithm/PathSum";
import Node from "../datastructure/Node";

describe('PathSum', () => {

    let solution: PathSum;

    before(() => {
     solution = new PathSum();
    })

    describe('hasPathSum', ()=>{
        it('if node is null return false regardless of target sum', () => {
            const root: Node = null;
            //const actual = solution.hasPathSum(root,0);

            //assert.equal(actual, false);

        })
    })

})