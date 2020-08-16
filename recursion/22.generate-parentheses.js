/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  generate(0, 0, n, "");
  return result;

  function generate(left, right, n, s) {
    // recursion terminator
    if (left === n && right === n) {
      result.push(s);
      return;
    }

    // process current logic
    if (left < n) {
      generate(left + 1, right, n, s + "(");
    }
    if (left > right) {
      generate(left, right + 1, n, s + ")");
    }

    // drill down
  }
};
// @lc code=end
