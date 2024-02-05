/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let objMap = {};
  let target = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    objMap[nums[i]] = objMap[nums[i]] ? objMap[nums[i]] + 1 : 1;
  }

  for (let data in objMap) {
    if (objMap[data] > target) {
      return data;
    }
  }
};
// @lc code=end
