/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // both root empty
  if (!p && !q) return true;

  // either one root empty
  if (!p || !q) return false;

  // if root exist, compare root value
  if (p.val !== q.val) return false;

  // recursive compare child tree
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end
// 解法：
// 1. 先检查是否root 是不是 empty
// 2. recursive 检查 p.left,q.left && p.right,q.right 是否相同
