/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    let len = queue.length;
    depth++;

    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }
  return depth;
};
// @lc code=end

// 解法：
// 1. 使用stack || queue
// 2. 根据当前node，判断左右子树，依次加入stack || queue
// 3. 建立一个空数组记录遍历顺序
