/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
// @lc code=end
// 解法：
// 1. 依次递归左右子节点
// 2. 当节点没有child, 返回

// 尝试 dfs, bfs 解法？
