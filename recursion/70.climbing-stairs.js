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
  // 递归 + 记忆化搜索：自底向下
  if (n <= 2) {
    return n;
  }
  if (!(n in cache)) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};

// @lc code=end

// 什么都不清楚的解题思路
// 暴力 ？ 基本情况 ？ 数学归纳法
// 找重复子问题
// 归根结底就是 if else, for while recursion

// 解法 1: recursion method without cache
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

// 解法 2: dp method
var climbStairs = function (n) {
  if (n < 2) return 1;
  // 初始第零和第一台阶所需步数
  // 第零台阶设置为1 是为了求第二台阶时，使用 第零和第一 相加而来的

  // 这个就是所谓的自底向上 bottom up
  let dp = [1, 1];
  for (let i = 2; i <= n.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};
