/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  var helper = function (nodeL, nodeR) {
    // recursion terminator
    if (!nodeL && !nodeR) return true;

    // process current lv
    if (
      nodeL &&
      nodeR &&
      nodeL.val === nodeR.val &&
      helper(nodeL.left, nodeR.right) &&
      helper(nodeL.right, nodeR.left)
    ) {
      return true;
    }
    return false;
  };

  return helper(root.left, root.right);
};
// @lc code=end
// 解法
// 1. divide conquer
// 2. 遍历对比左子树的左节点，对比右子树的右节点为相等，依次遍历下去
