/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let objMap = {};
  // 判断空数组
  if (nums.length === 0) {
    return false;
  }

  // mapping
  for (let i = 0; i < nums.length; i++) {
    objMap[nums[i]] = objMap[nums[i]] ? objMap[nums[i]] + 1 : 1;
  }

  // compare mapping value which is > 1
  for (let data in objMap) {
    if (objMap[data] > 1) {
      return true;
    }
  }
  return false;
};
// @lc code=end
// 解法
// 1. 设置map
// 2. compare map 里值
