/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const arr = [];
  const queue = [root];

  while (queue.length !== 0) {
    const currentLevel = [];
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const currNode = queue.shift();
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
      currentLevel.push(currNode.val);
    }
    arr.push(currentLevel);
  }
  return arr;
};
// @lc code=end
// 解法：
// 1. BFS 遍历
// 2. 设置当前层级空数组
// 3. 每当 queue 遍历结束(相当于lv + 1)，finalArr.push(currentLv)
