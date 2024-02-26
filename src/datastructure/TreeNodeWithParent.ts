class TreeNodeWithParent {

    val: number;
    left: TreeNodeWithParent | null;
    right: TreeNodeWithParent | null;
    parent: TreeNodeWithParent | null;


    constructor(val?: number, left?: TreeNodeWithParent | null, right?: TreeNodeWithParent | null, parent?: TreeNodeWithParent | null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

export default TreeNodeWithParent