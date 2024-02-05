/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function (root) {
  let result = [];
  traverse(root);
  return result;

  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
};
// @lc code=end
// 解法模版
// def preorder(self, root)
//  if root
//   self.traverse_path.apppend(root.val)
//   self.preorder(root.left)
//   self.preorder(root.right)

// 尝试iterative approach
var preorderTraversal = function(root) {
  // iterative 关键在于用 stack 维护

  // empty condition
  if(!root) {
    return [];
  }
  var stack = [root];
  var result = []
  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if(node.right) {
      stack.push(node.right)
    }
    if(node.left) {
      stack.push(node.left)
    }
  }
  return result;
}