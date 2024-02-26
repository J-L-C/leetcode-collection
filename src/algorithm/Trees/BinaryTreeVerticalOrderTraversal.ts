import TreeNode from "../../datastructure/TreeNode";

class InorderTraversalBT {

    constructor() {}

    verticalOrderTraversal(node: TreeNode): any{

        const verticalOrder = new Map();
        this.traverse(node,0,verticalOrder);
        console.log(verticalOrder);
        // const result = Array.from(verticalOrder.keys()).sort( (a,b) => { a[0] > b[0] } );
    }

    private traverse(root: TreeNode, column: number, verticalOrder: Map<number,number[]>){

        if(root == null)
            return;

        if( verticalOrder.has(column) ){
            verticalOrder.get(column).push(root.val);
        } else {
            verticalOrder.set(column,[root.val]);
        }

        helper(root.left,column-1,verticalOrder);
        helper(root.right,column+1,verticalOrder);

    }
}

export default InorderTraversalBT;