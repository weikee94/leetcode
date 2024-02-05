/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  if (num === 1) {
    return true;
  }

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2);
    if (mid * mid === num) {
      return true;
    }
    if (mid * mid > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
// @lc code=end
// 解法
// 1. binary search 模版
