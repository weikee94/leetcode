/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = nums;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // dp 方程在这里
    dp[i] = Math.max(dp[i - 1], 0) + dp[i];
    if (dp[i] > max) {
      max = dp[i];
    }
  }

  return max;
};
// @lc code=end

// 解法：思考点是想到：要嘛当前值是最大值，或者当前在前面的值为最大值，进而得出 dp 方程： dp[i] = Math.max(dp[i - 1], 0) + dp[i];
// 1. DP
//  a. 分治 (子问题)
//  b. 状态数组定义
//  c. DP 方程
