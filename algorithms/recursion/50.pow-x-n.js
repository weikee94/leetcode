/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let result = 1;
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  } else {
    for (let i = 0; i > n; i--) {
      result *= 1 / x;
    }
  }

  return result;
};
// @lc code=end
// 解法
// 1. 暴力循环，数学相乘即可, 可能会 time limit exceeded
// 2. 分而治之

// 解法2： divide conquer （正确解法）
// 2^8 = 2(2^4) = 2(2(2^2))

var myPow = function (x, n) {
  var pow = function (x, n) {
    // terminator
    if (n === 0) {
      return 1.0;
    }
    // split to small
    let half = pow(x, parseInt(n / 2));
    if (n % 2 === 0) {
      // merge
      return half * half;
    } else {
      return half * half * x;
    }
  };

  // 判断边界条件
  return n < 0 ? pow(1 / x, -n) : pow(x, n);
};
