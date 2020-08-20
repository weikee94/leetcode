/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let result = [];

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  var helper = function (accumulateItem, start) {
    // terminator
    if (accumulateItem.length === digits.length) {
      result.push(accumulateItem);
      return;
    }
    // process current
    // 这个检查看有没有下面这种的
    // for in method
    // accumulate += char
    // accumulate = ''
    for (let char of map[digits[start]]) {
      // drill down
      helper(accumulateItem + char, start + 1);
    }
    // reverse
  };

  helper("", 0);

  return result;
};
// @lc code=end
// 解法
// 1. backtracking
