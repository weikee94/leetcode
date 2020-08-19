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

// 第二种解法
var subsets = function (nums) {
  const result = [];

  const backtrack = (path, len, start) => {
    if (path.length === len) {
      result.push(path);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), len, i + 1);
    }
  };

  for (let i = 0; i <= nums.length; i++) {
    // 路径，加进result数组的长度限制，下标是为了下次遍历时从当前号码加一开始
    backtrack([], i, 0);
  }
  return result;
};
