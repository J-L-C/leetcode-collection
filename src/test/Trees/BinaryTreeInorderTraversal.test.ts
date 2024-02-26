import {describe, it} from "mocha";
import {assert} from "chai";
import TreeNode from "../../datastructure/TreeNode";
import InorderTraversalBT from "../../algorithm/Trees/InorderTraversalBT";


describe('Inorder Traversal', () => {

    beforeEach(()=>{

    })

    it('Given a Tree, Traverse the tree in order', () => {

        const root = treeWithThreeNodes();
        const testable: InorderTraversalBT = new InorderTraversalBT();
        const result: number[] = testable.inOrderTraverse(root);
        const expected: number[] = [1,3,2];

        assert.deepEqual(result,expected);

    })

})


function treeWithThreeNodes() {

    const leftTreeNode = new TreeNode(3,null,null);
    const rightTreeNode = new TreeNode(2, leftTreeNode, null);
    const root = new TreeNode(1,null,rightTreeNode);

    return root;
}
