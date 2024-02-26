import TreeNode from "../../datastructure/TreeNode";

class InorderTraversalBT {

    constructor() {}

    verticalOrderTraversal(root: TreeNode): any{

        //A solution
        //The root will be roughly in the middle
        //so if the width of the tree were say 5, then the number of columns
        //would be 5. Conceptually, starting from the middle, when I traverse left,
        //I move one column over (-1). Whe I traverse right I move one column to the right (+1)
        //I believe If I can keep track of the left right movements, I can determine what column each
        //node should be in and group accordingly. One tricky part, is that I do not know how many columns
        //there are. I don't want to go through the process of trying to count the width, so I think I could
        //still represent positioning relative to the starting value of 0.
        //Values found in columns to the left of root will be negative and columns to the right will be positive.

        let queue: any = [ [root,0] ];
        let map = new Map();

        if(root == null)
            return [[]];

        while(queue.length > 0){

            const item = queue.shift();
            const currentNode: any = item[0];
            const level: any = item[1];

            if( !map.has(level) ){
                map.set(level, [ currentNode.val ]);
            } else {
                map.get(level).push(currentNode.val);
            }

            if(currentNode.left != null)
                queue.push([currentNode.left, level-1])

            if(currentNode.right != null)
                queue.push([currentNode.right, level+1])
        }

        console.log(map)

        return Array.from(map.entries()).sort( (a,b) => a[0]-b[0] ).map(element => element[1]);

    }
}

export default InorderTraversalBT;