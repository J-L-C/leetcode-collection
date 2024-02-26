import {describe, it} from "mocha";
import {assert} from "chai";
import LowestCommonAncestorBT3 from "../../algorithm/Trees/LowestCommonAncestorBT3";
import TreeNodeWithParent from "../../datastructure/TreeNodeWithParent";


describe('Least Common Ancestor', () => {


    it('Given a Tree, find the LCA of nodes 5 and 4', () => {

        const [nodeP,nodeQ] = lcaTreeBuilderNodes5and4();
        const testable:LowestCommonAncestorBT3  = new LowestCommonAncestorBT3();
        const result:TreeNodeWithParent  = testable.findLowestCommonAncestor(nodeP,nodeQ);

        assert.equal(result.val,5);

    })

    it('Given a Tree, find the LCA nodes 5 and 1', () => {

        const [nodeP,nodeQ] = lcaTreeBuilderNodes5and1();
        const testable:LowestCommonAncestorBT3  = new LowestCommonAncestorBT3();
        const result:TreeNodeWithParent  = testable.findLowestCommonAncestor(nodeP,nodeQ);

        assert.equal(result.val,3);

    })

})


function lcaTreeBuilderNodes5and4(): TreeNodeWithParent[] {

    const node8 = new TreeNodeWithParent(8, null, null);
    const node0  = new TreeNodeWithParent(0, null, null);
    const node1 = new TreeNodeWithParent(1, node0, node8);

    const node4  = new TreeNodeWithParent(4, null, null);
    const node7 = new TreeNodeWithParent(7, null, null);
    const node2 = new TreeNodeWithParent(2, node7, node4);

    const node6  = new TreeNodeWithParent(6, null, null);
    const node5 = new TreeNodeWithParent(5,node6, node2);

    const root = new TreeNodeWithParent(3,node5,node1, null);

    node5.parent = root;
    node1.parent = root;
    node6.parent = node5;
    node2.parent = node5;
    node4.parent = node2;
    node7.parent = node2;
    node0.parent = node1;
    node8.parent = node1;

    return [node5,node4];
}


function lcaTreeBuilderNodes5and1(): TreeNodeWithParent[] {

    const node8 = new TreeNodeWithParent(8, null, null);
    const node0  = new TreeNodeWithParent(0, null, null);
    const node1 = new TreeNodeWithParent(1, node0, node8);

    const node4  = new TreeNodeWithParent(4, null, null);
    const node7 = new TreeNodeWithParent(7, null, null);
    const node2 = new TreeNodeWithParent(2, node7, node4);

    const node6  = new TreeNodeWithParent(6, null, null);
    const node5 = new TreeNodeWithParent(5,node6, node2);

    const root = new TreeNodeWithParent(3,node5,node1, null);

    node5.parent = root;
    node1.parent = root;
    node6.parent = node5;
    node2.parent = node5;
    node4.parent = node2;
    node7.parent = node2;
    node0.parent = node1;
    node8.parent = node1;

    return [node5,node1];
}
