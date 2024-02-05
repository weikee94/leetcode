/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count += n % 2;
    n >>>= 1;
  }
  return count;
};

// @lc code=end
// 解题思路
// 1. 使用位运算
// 2. explanation: this is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:
