/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  let min = Infinity;

  var dfs = function (node, depth) {
    // terminator
    if (!node.left && !node.right) {
      if (min > depth) {
        min = depth;
      }
    }

    // process current
    if (node.left) {
      dfs(node.left, depth + 1);
    }
    if (node.right) {
      dfs(node.right, depth + 1);
    }

    // drill down
  };
  dfs(root, 1);
  return min;
};
// @lc code=end
// 解法：
// 1 terminator
// 2 process current
// 3 drill down
