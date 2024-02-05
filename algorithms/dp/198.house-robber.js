/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let dp = [];
  dp = [0, nums[0]];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  return dp[nums.length];
};
// @lc code=end
// 解法
// 1 dynamic programming
//   nums = [2, 7, 9]
//   most money = either 9 + 2 || 7 by conditions
//   dp[0] = 0
//   dp[1] = nums[1]
//   dp[2] = max(dp[2-2] + nums[2], dp[1])
//   dp[3] = max(dp[3-2] + nums[3], dp[2])
