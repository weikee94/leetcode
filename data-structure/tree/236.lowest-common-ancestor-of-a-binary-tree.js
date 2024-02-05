/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return;
  }

  // recursion terminator
  if (root === p || root === q) {
    return root;
  }
  // process current level
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // drill down
  if (left && right) {
    return root;
  } else {
    return left || right;
  }
};
// @lc code=end
// 解法
// 1。 递归下去
// 2。 只要match 就返回
// 3。 对比左右，如果都有返回根节点，要不然返回 left || right
