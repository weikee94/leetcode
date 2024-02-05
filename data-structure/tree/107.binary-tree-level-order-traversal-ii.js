/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = [];

  var traverse = function (node, lv) {
    if (!node) return;
    // recursion terminator
    if (result[lv] === undefined) {
      // 为什么没有办法使用 unshift ??
      // result.unshift([]);
      result.push([]);
    }
    result[lv].push(node.val);

    // process current logic
    traverse(node.left, lv + 1);
    traverse(node.right, lv + 1);

    // drill down
  };

  traverse(root, 0);
  return result.reverse();
};
// @lc code=end
// 解法
// 1. DFS 遍历，结果 reverse 即可
// 2. 疑问为什么不可以使用 unshift ?
