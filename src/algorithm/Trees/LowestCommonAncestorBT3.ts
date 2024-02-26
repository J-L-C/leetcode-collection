import TreeNodeWithParent from "../../datastructure/TreeNodeWithParent";

class LowestCommonAncestorBT3 {

    constructor() {}
    findLowestCommonAncestor(p: TreeNodeWithParent, q: TreeNodeWithParent): TreeNodeWithParent {

        const visitorLog = new Map()
        //We are dropped in to these two nodes with references to their parent.
        //
        //The two concepts covered in this question are hash table and two pointers
        //
        //so the question is, as I move up the tree from my starting position
        //how do I track the nodes along the way. I think I could create a path
        //that is tracked in a hashmap. Or as I move up the tree from each node,
        //I can add an entry in a hashmap that I will call the vistor log.
        //Then once either node visits the same node, we have a hit and the LCA is that node.
        //Since a node itself can be an LCA there isn't an edgecase in that regard.
        //

        //how can i check if one path has already been exhausted?

        //Alternatively, I could just
        //visit myself

        this.traverseToRoot(p,visitorLog);
        this.traverseToRoot(q,visitorLog);

        for( let visits of visitorLog.values()){
            if(visits.length > 1){
                return visits[0];
            }
        }

        return null;
    };


    traverseToRoot(node: TreeNodeWithParent, visitorLog: Map<number,TreeNodeWithParent[]>){

        if( !visitorLog.has(node.val) ){
            visitorLog.set(node.val, [ node ]);
        } else {
            visitorLog.get(node.val).push(node);
        }

        if(node.parent == null)
            return;

        this.traverseToRoot(node.parent, visitorLog);
    }
}

export default LowestCommonAncestorBT3;