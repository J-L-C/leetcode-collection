import TreeNode from "../../datastructure/TreeNode";

class InorderTraversalBT {

    constructor() {}

    inOrderTraverse(node: TreeNode): any{

        let result: number[] = [];
        this.traverse(node,result);
        return result;
    }

    private traverse(node: TreeNode, result: number[]){
        if (node != null){
            this.traverse(node.left,result);
            result.push(node.val);
            this.traverse(node.right,result);
        }

    }
}

export default InorderTraversalBT;