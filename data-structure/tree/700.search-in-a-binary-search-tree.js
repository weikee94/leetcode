/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // terminator
  if (!root) {
    return null;
  }

  // drill down
  if (val > root.val) {
    // go right side
    return searchBST(root.right, val);
  } else if (val < root.val) {
    // go left side
    return searchBST(root.left, val);
  } else {
    return root;
  }
};
// @lc code=end
// 解法：
// 1. recursive scan the tree
// 2. compare value then chose left or right then recrusive sub
