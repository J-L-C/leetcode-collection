import {describe, it} from "mocha";
import {assert} from "chai";
import TreeNode from "../../datastructure/TreeNode";
import InorderTraversalBT from "../../algorithm/Trees/InorderTraversalBT";
import RangeSumOfBST from "../../algorithm/Trees/RangeSumOfBST";


describe('Inorder Traversal', () => {

    beforeEach(()=>{

    })

    it('Given a Tree, Traverse the tree in order', () => {

        const low = 7;
        const high = 15;
        const root = buildBST();
        const testable: RangeSumOfBST = new RangeSumOfBST();
        const result: number = testable.rangeSumBST(root,low,high);
        const expected: number = 32;

        assert.equal(result,expected);

    })

})


function buildBST() {

    const rightTreeNode18  = new TreeNode(18, null, null);

    const rightTreeNode7 = new TreeNode(7, null, null);
    const leftTreeNode3  = new TreeNode(3, null, null);

    const leftTreeNode5 = new TreeNode(5,leftTreeNode3,rightTreeNode7);
    const rightTreeNode15 = new TreeNode(15, null, rightTreeNode18);
    const root = new TreeNode(10,leftTreeNode5,rightTreeNode15);

    return root;
}