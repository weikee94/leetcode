/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  let result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
};
// @lc code=end
// 解法模版：
// def inorder(self, root)
//  if root:
//   self.inorder(root.left)
//   self.traverse_path.append(root.val)
//   self.inorder(root.right)

// 尝试 iterative approach
