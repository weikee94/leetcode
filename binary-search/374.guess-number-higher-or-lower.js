/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  var helper = function (initial, n) {
    let mid = Math.floor((n + initial) / 2);
    // recursion terminator
    if (guess(mid) === 0) {
      return mid;
    }
    // process current level
    else if (guess(mid) !== 1) {
      // 缩小范围
      return helper(initial, mid - 1);
    } else {
      return helper(mid + 1, n);
    }
    // drill down
  };

  return helper(1, n);
};
// @lc code=end
// 解法
// 1. using divide and conquer technique
