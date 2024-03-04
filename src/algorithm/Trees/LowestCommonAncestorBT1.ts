/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import TreeNode from "../../datastructure/TreeNode";

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

class RangeSumOfBST{
    constructor() {}

    lowestCommonAncestor(root: TreeNode, q: TreeNode, p: TreeNode) {

        return this.findLCA(root,p,q);
    };

    findLCA(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode{

        if(root == null)
            return null;

        const left: TreeNode = this.findLCA(root.left, p, q);
        const right: TreeNode = this.findLCA(root.right, p, q);
        const currNode: TreeNode = root.val == p.val || root.val == q.val? root : null;

        if( (left && currNode) ||  (right && currNode) || (left && right)){
            return root;
        }

        if(root.val == p.val || root.val == q.val)
            return root;

        return left || right;

    }
}

export default RangeSumOfBST;