/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// optimization
let cache = {};
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  if (!(n in cache)) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};

// var climbStairs = function (n) {
//   let result = 0;
//   if (n <= 2) {
//     return n;
//   }
//   while (n > 0) {
//     result = climbStairs(n - 1) + climbStairs(n - 2);
//   }
//   return result;
// };

// @lc code=end

// 什么都不清楚的解题思路
// 暴力 ？ 基本情况 ？ 数学归纳法
// 找重复子问题
// 归根结底就是 if else, for while recursion
