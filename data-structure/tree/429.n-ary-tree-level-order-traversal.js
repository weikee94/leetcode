/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  traverse(root, 0);
  return result;

  function traverse(node, depth) {
    if (!node) return;

    // 重点在于比较深度，创建下一层级的新数组
    if (depth === result.length) {
      result.push([]);
    }
    result[depth].push(node.val);
    for (let data of node.children) {
      traverse(data, depth + 1);
    }
  }
};
// @lc code=end
// 解法：
// 1. recursive loop
// 2. add same lv node
// 3. how iterative way to add node ?? (iterative way required while loop and queue to implement)
