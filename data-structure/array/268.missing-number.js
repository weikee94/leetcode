/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
    sum2 += i + 1;
  }
  return sum2 - sum1;
};
// @lc code=end
// 解法
// 1. 数学解， 可以多看别人解法 🤪
