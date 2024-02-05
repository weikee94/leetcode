/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return;

    for (let data of node.children) {
      traverse(data);
    }
    result.push(node.val);
  }
};
// @lc code=end
// 解法：
// 1. 遍历到底
// 2. 依次加进数组中
