/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length === 0 && B.length === 0) {
    return true;
  }

  for (let i = 0; i < A.length; i++) {
    let first = A.slice(i);
    let last = A.slice(0, i);

    if (first + last === B) {
      return true;
    }
  }

  return false;
};
// @lc code=end
// 解法：
// 1. 遍历其中一个 string
// 2. 依次把前一个往后添加，然后对比
