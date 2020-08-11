/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) {
      return;
    }

    result.push(node.val);

    for (let data of node.children) {
      traverse(data);
    }
  }
};
// @lc code=end
// 解法：
// 1. 遍历到底
// 2. 依次加进数组
