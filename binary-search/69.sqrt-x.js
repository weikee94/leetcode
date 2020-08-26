/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  if (x === 0 || x === 1) {
    return x;
  }

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2);

    // 重点在这一行
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // 看下面例子理解
  // mid * mid > x  ? right - 1 : left
  // 假设 x 是 8
  // 3 * 3 > 8 ？ 3 - 1 = 2
  return right - 1;
};
// @lc code=end
// 解法
// 1. 二分查找
// 2. 找第一个大过的号码 - 1 即可
//    sqrt(4) = 2
//    sqrt(8) = 2
