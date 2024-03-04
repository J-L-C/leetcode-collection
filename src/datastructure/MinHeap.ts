import TreeNode from "./TreeNode";
import treeNode from "./TreeNode";

class MinHeap {

    heap: TreeNode[];

    constructor() {
        this.heap = [];
    }

    enqueue(val: number) {
        const node = new TreeNode(val, null, null);
        this.heap.push(node);
        this.swim();
    }

    dequeue() {
        const minValue = this.heap[0];
        const leafValue: TreeNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = leafValue;
            this.sink();
        }
        return minValue;
    }

    swim() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element.val >= parent.val)
                break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    sink() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.val < element.val) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }





}

export default MinHeap;