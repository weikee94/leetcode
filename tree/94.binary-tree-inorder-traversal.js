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
var inorderTraversal = function(root) {
  // 维护 stack
  // 检查边界条件
  if(!root) {
      return [];
  }
  
  let stack = [];
  let result = [];
  let current = root;
  
  // stack length 是终止条件
  // 又或者 current 已经是 null (想象3的时候，已经是最后一个node，current = current.right 
  // 相当于 current = null 就跳出循环了)
  /**
  *           1
  *         /   \
  *        2     3
  */
  while(current !== null || stack.length) {
      if(current) {
          stack.push(current)
          current = current.left
      } else {
          current = stack.pop()
          result.push(current.val)
          current = current.right;
      }
  }
  
  return result;
}