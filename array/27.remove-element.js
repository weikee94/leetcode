/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let final = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[final] = nums[i];
      final++;
    }
  }
  return final;
};
// @lc code=end

// 解法：
// 1. 原地删除，所以直接置换就可以了
