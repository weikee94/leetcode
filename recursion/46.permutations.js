/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  const availableLength = nums.length;

  var helper = function (temp, decisionArr) {
    // recursion terminator
    if (temp.length === availableLength) {
      result.push(temp.slice());
      return;
    }

    // process current lv
    for (let i = 0; i < decisionArr.length; i++) {
      // 技巧在这里，当不能用index compare，可以使用filter 把范围缩小
      temp.push(decisionArr[i]);
      let filteredArr = decisionArr.filter((n) => n !== decisionArr[i]);
      helper(temp, filteredArr);
      temp.pop();
    }

    // drill down
  };

  helper([], nums);

  return result;
};
// @lc code=end
// 解法
// 1. backtrackig template
// 2. 可以试看逆着把数组一一排除做法
