/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  var helper = function (temp, index) {
    // recursion terminator
    // 不同点在于插入的值不同⚠️
    if (temp.length > nums.length) {
      return;
    }
    result.push(temp.slice());
    // process current lv
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      // drill down
      helper(temp, i + 1);
      temp.pop();
    }
  };

  helper([], 0);

  return result;
};
// @lc code=end
// 解法
// 1. backtrack 模版
