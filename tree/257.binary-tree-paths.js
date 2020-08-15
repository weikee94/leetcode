/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];

  // 重点在这里：练习运用 多种不同params 记录，例如这题的path
  traverse(root, "");
  return result;

  function traverse(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(path + node.val);
    }

    path = path + node.val;

    // 遍历左子树
    traverse(node.left, path + "->");
    // 遍历右子树
    traverse(node.right, path + "->");
  }
};
// @lc code=end
