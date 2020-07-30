/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (const char of s) {
    if (char in map) {
      stack.push(map[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return !stack.length;
};
// @lc code=end
// 解法：
// 1. 洋葱思维
// 2. 把要对比的pair data放在map里
// 3. stack
