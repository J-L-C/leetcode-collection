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

    rangeSumBST(root: TreeNode, low: number, high: number) {

        //ok so the intuition is to traverse the tree
        //and adding the values that are between, and include, the
        //low and high values.

        return this.searchAndSum(root, low, high)
    };

    searchAndSum(root: TreeNode, low: number, high: number): number{

        if(root === null)
            return 0;

        if( root.val >= low && root.val <= high){
            console.log('value added')
            console.log(root.val)
            console.log('to')
            return root.val + this.searchAndSum(root.left,low,high) + this.searchAndSum(root.right,low,high);
        } else if(root.val < low){
            return this.searchAndSum(root.right,low,high);
        } else {
            return this.searchAndSum(root.left, low, high);
        }

    }
}

export default RangeSumOfBST;