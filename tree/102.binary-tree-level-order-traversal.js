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

// 2. DFS 遍历
//    通过传递层级树来判断该层级有什么元素
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];

  var traverse = function (node, level) {
    // recursion terminator
    if (!node) return;
    // process current logic
    if (result.length === level) {
      result.push([]);
    }
    result[level].push(node.val);
    // drill down
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return result;
};
