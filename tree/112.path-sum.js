/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let accumulateVal = 0;
  let result = false;

  var traverse = function (root, accumulateVal) {
    if (!root) return;

    // process current logic
    accumulateVal += root.val;

    // terminator
    if (accumulateVal === sum && !root.left && !root.right) {
      result = true;
      return;
    }

    // drill down
    traverse(root.left, accumulateVal);
    traverse(root.right, accumulateVal);
  };

  traverse(root, accumulateVal);

  return result;
};
// @lc code=end
// 解法
// 1. DFS 然后相加值传递下去即可
