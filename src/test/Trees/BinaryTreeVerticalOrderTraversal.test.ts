import {describe, it} from "mocha";
import {assert} from "chai";
import TreeNode from "../../datastructure/TreeNode";
import InorderTraversalBT from "../../algorithm/Trees/InorderTraversalBT";
import BinaryTreeVerticalOrderTraversal from "../../algorithm/Trees/BinaryTreeVerticalOrderTraversal";


describe('Inorder Traversal', () => {


    it('Given a Tree, Traverse the tree in a vertical order', () => {

        const root = treeWith5Columns();
        const testable: BinaryTreeVerticalOrderTraversal = new BinaryTreeVerticalOrderTraversal();
        const result: number[][] = testable.verticalOrderTraversal(root);
        const expected: number[][] = [[4],[9],[3,0,1],[8],[7]];

        assert.deepEqual(result,expected);

    })

})


function treeWith5Columns() {

    const rightTreeNode0 = new TreeNode(0, null, null);
    const leftTreeNode4  = new TreeNode(4, null, null);
    const rightTreeNode7 = new TreeNode(7, null, null);
    const leftTreeNode1  = new TreeNode(1, null, null);
    const leftTreeNode9 = new TreeNode(9,leftTreeNode4,rightTreeNode0);
    const rightTreeNode8 = new TreeNode(8, leftTreeNode1, rightTreeNode7);
    const root = new TreeNode(3,leftTreeNode9,rightTreeNode8);

    return root;
}
