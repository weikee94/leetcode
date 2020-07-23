/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // base case
  if (digits.length === 0) {
    return [1];
  }
  const last = digits.length - 1;
  if (digits[last] === 9) {
    return plusOne(digits.slice(0, last)).concat([0]);
  }

  return digits.slice(0, last).concat(digits[last] + 1);
};
// @lc code=end

// 解法：
// 1. recursive
