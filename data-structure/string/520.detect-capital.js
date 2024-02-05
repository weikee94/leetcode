/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word) {
    return true;
  }
  if (word.toUpperCase() === word) {
    return true;
  }
  if (word[0].toUpperCase() + word.substring(1).toLowerCase() === word) {
    return true;
  }
  return false;
};
// @lc code=end
// 解法
// 1. 就是把题目条件都判断了对比原来的字符就可以了
