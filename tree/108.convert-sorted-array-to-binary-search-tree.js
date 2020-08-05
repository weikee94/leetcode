/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 这步是思考关键
  return helperToBST(nums, 0, nums.length - 1);
};

var helperToBST = function (nums, l, r) {
  // terminator
  if (l > r) {
    return null;
  }

  const mid = l + Math.floor((r - l) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = helperToBST(nums, l, mid - 1);
  root.right = helperToBST(nums, mid + 1, r);

  return root;
};
// @lc code=end
// 解法：
// 1. 二分查找
