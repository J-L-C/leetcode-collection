# Leetcodes - Meta Focus

## Introduction

I looked at the top 100 Meta/Facebook questions and counted the frequency of each tag across the top 100
    
1. Array - 51
2. String - 29
3. Hash Table - 23
4. Depth-First Search - 19
5. Breadth-First Search - 17
6. Tree - 16
7. Binary Tree - 16
8. Two Pointers - 15
9. Sorting - 13
10. Binary Search - 12

So a quick glance shows that Trees are important! We have searching with DFS and BFS, Trees, Binary Tree, and Binary
Search. So it is an important area to focus on. However, I went a step further and looked at the top 20 questions
and there was a bit of a different result.

In the Top 20 questions number of questions that included one of these topics:
- 1/4 Stacks
- 1/5 Two Pointer
- 1/10 Hash Tables
- 2/5 Tree
    
So looking at the percentage of questions in the top 20 that include these topics and there respective frequency lead me
to believe that starting with these 4 topics will be the best way to spend my time. If I have more time after, then
more topics will be added.

# Trees
> "Things will go as they will; and there is no need to hurry to meet them." 
> - Treebeard

So when it comes to Trees, definitely need to be comfortable with recursion.
Also, Visit means to perform an operation. Keep that in mind.

## Traversals
- In-Order - Left * Root (Visit) * Right
- Pre-Order - Root (Visit) * Left * Right
- Post-order - Left * Right * Root (Visit)

> If you need to add a value to an array, add the value on visit. Also, pass in the array to make things easier.


Example of an In-Order Traversal. 
```javascript
    private traverse(node: TreeNode, result: number[]){
        if (node != null){
            this.traverse(node.left,result);
            result.push(node.val);
            this.traverse(node.right,result);
        }
    }
```

## Is Same Tree

For checking if two given trees are the same, follow this method. We only return true if we hit the bottom of the recursion, 
stepping into the null node, and seeing that they are both null.

Otherwise, if at any point a condition fails, we return false. This also stops the traversal, so that 
we don’t have a rogue true statement on the bottom of the stack waiting to give us a wrong result.

```javascript
public boolean isSameTree(TreeNode p, TreeNode q) {
    
    // p and q are both null
    if (p == null && q == null) return true;
    
    // one of p and q is null
    if (q == null || p == null) return false;
    
    if (p.val != q.val) return false;
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
}
```

Some other ways to move through a binary tree

## Outside movement

moveOnTheOutside(left.left, right.right)

                        1
                     2    2
                   3  4  4  3

If the above is called recursively from the root, we are able to move through the outer section of the tree. 1 -> 2 2 -> 3 3
I saw this in the solution for checking if a tree  mirrors itself. 

```javascript
 public boolean isMirror(TreeNode left, TreeNode t2) {

    if (left== null && right == null) return true;
    if (left == null || right == null) return false;

    return (left.val == right.val) &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
}
```

## Max Depth

I was able to do this after thinking about it for a bit. My thought of working with trees is to invert how I make
calculations. It is appears in these early example that the best way to solve these kinds of problems is to chunk the
tree into smaller trees but ALSO try and reason about the solution from the base case up rather than reasoning
about it from the root down. Reasoning about it from the root down is helpful for understanding the problem and how
to navigate through the tree but can lead to incorrect or difficult to write solutions. However, since we are relying on 
recursion to solve these problems we can leverage the stack and move the decision and execution lower in the into the tree itself. 
It seems to me going from the top down has a more iterative approach in terms of thinking were as considering the base 
case and moving up the tree is more like a stack.

In an iterative approach I mean that, for instance in a for loop, I am performing a piece of work AND moving through
the data structure where as in a recursive (compiler stack) approach I am moving through the data structure 
(adding things to the stack) but not always performing a piece of work. Only after a certain condition will 'work'
actually be done and each 'work' item will rely on the previous results.

```javascript
function maxDepth(root: TreeNode | null): number {

    if(root == null)
        return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```


Since I am not going to try to make the class NestedInteger, I was only able
to code up a solution in LeetCode. I settled on a depth first search approach
which made the most sense to me. My thought process was pretty simple, check if
the value in the array was a number or an array. If it was an number, I could multiple
that number by the level and add it to the sum. If the value was an array, I could
just call my DFS function again, increment my level by one, and let the for loop
at that level process that array which would then value * level for each element
and call DFS on any arrays inside as well giving me a great way to keep track of 
what level the values should be multiplied by.

For runtime complexity, It looks like a O(N) as we visit each element only once.
Space complexity would be O(1) as the only extra storage we use is storing the sum and level.
HOWEVER! I am wrong, the space complexity would also be O(N) as we need to consider the stack
that is used during these calls. Worst case, we have a stack of N elements so we can say O(N).

```javascript
function depthSum(nestedList: NestedInteger[]): number {
    

    let level = 1;
    let sum = 0;

    //one approach
    // loop through the array, check to see what the item is
    // if it is a number, perform this opperation sum += item[i] * level
    // if it is an array -> call depthSum(item[i])
    // sum += value * depth 



   return depthFirstSearch(nestedList, level);

};

function depthFirstSearch(nestedList: NestedInteger[], level: number): number{

     let sum = 0;

     for(let value of nestedList){
    
        
        if( value.isInteger() ) 
            sum += value.getInteger() * level;
        else
            sum += depthFirstSearch(value.getList(),level + 1)    
    }

    return sum;
}
```




