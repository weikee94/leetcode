/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let objMap = {};
  for (let i = 0; i < nums.length; i++) {
    objMap[nums[i]] = objMap[nums[i]] ? objMap[nums[i]] + 1 : 1;
  }
  for (let data in objMap) {
    if (objMap[data] === 1) {
      return data;
    }
  }
};
// @lc code=end
// 解法
// 1. 使用 map 存储出现次数
// 2. 遍历 map 即可
