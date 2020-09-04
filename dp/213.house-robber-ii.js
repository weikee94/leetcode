/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // handle edge cases
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length < 2) {
    return nums[0];
  }
  // let nums: [1,2,3,4]
  let route1 = new Array(nums.length + 1).fill(0);
  let route2 = new Array(nums.length + 1).fill(0);

  // start from 1 - nums.length-1
  // 1 -> 3
  route1[1] = nums[0];
  route1Max = nums[0];
  for (let i = 2; i <= nums.length - 1; i++) {
    route1[i] = Math.max(route1[i - 1], nums[i - 1] + route1[i - 2]);
    if (route1[i] > route1Max) {
      route1Max = route1[i];
    }
  }

  // start from 2 - nums.length
  // 2 -> 4
  route2[1] = nums[1];
  route2Max = nums[1];
  for (let i = 2; i <= nums.length; i++) {
    route2[i] = Math.max(route2[i - 1], nums[i] + route2[i - 2]);
    if (route2[i] > route2Max) {
      route2Max = route2[i];
    }
  }

  return Math.max(route1Max, route2Max);
};
// @lc code=end
// 解法：要参考看看别人解法，这个解法速度偏慢
// 1. DP
//  思路要点：
//   题目规定第一家与最后一家相连，所以[1,2,3] 这种情况第一与第三不能相加，
//     为了解决这个情况，我们可以选择从第一到倒数二 || 第二到倒数第一
//     然后比对两个最大值即可
