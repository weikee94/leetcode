- root to leaf sum
 - 第一点想到怎么确认是leaf
  - node.left === null && node.right === null (!node.left && !node.right)
 - 第二点想到起始值是 0，每次递归下去看accumulateVal + node.val === targetSum 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let accumulateVal = 0;
    let result = false;
    
    const traverse = (node, accumulateSum) => {
        if(!node) {
            return;
        }
        let isLeaf = !node.left && !node.right;
        accumulateSum += node.val;
        if(isLeaf && accumulateSum === sum) {
            result = true;
            return;
        }
        traverse(node.left, accumulateSum)
        traverse(node.right, accumulateSum)
    }
    
    traverse(root, accumulateVal)
    
    return result;
};
