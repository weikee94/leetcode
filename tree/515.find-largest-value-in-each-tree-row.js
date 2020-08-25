/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function (root) {
  let result = [];

  var traverse = function (node, level) {
    // recursion terminator
    if (!node) return;

    // process current logic
    // 注意判断为什么要定义 undefined 是为了当没比较时，result[0] 即为最大值
    if (result[level] === undefined || node.val > result[level]) {
      result[level] = node.val;
    }

    // drill down
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return result;
};
// @lc code=end
// 解法
// 1. DFS 用对应的层级， 然后每次添加比较， 把大的号码加进去即可
