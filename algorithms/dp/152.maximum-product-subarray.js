/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // base case
  let result = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 状态：原问题和子问题会变化的量 currentMax, currentMin
    currentMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    currentMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);

    prevMax = currentMax;
    prevMin = currentMin;
    // 选择：导致状态发生变化的行为即选最大值放进下个循环选
    result = Math.max(currentMax, result);
  }

  return result;
};
// @lc code=end
// 解法
// 1. DP
//   步骤：
//     1. 定义重复子问题
//     2. 最优子结构
//        因为可能出现 负负得正的情况，所以我们需要储存前一个最小值，当乘于当前负值就有可能是最大值
//        currentMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
//        currentMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
//     3. 状态转移方程
