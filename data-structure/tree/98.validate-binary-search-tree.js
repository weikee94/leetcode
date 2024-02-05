/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

const { notEqual } = require("assert");

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
var isValidBST = function (root) {
  return isValid(root, (lower = -Infinity), (max = Infinity));

  function isValid(root, lower, max) {
    if (!root) {
      return true;
    }
    // terminator
    if ((root && root.val <= lower) || (root && root.val >= max)) {
      return false;
    }

    // drill down
    return (
      isValid(root.left, lower, root.val) && isValid(root.right, root.val, max)
    );
  }
};
// @lc code=end
// 解法：
// 1. 定义左右子树的范围
// 2. 左子树一定是[min -> node.val]
// 3. 右子树一定是[node.val -> max]
