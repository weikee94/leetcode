/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove special character || _ (underscore)
  let filterS = s.replace(/\W|_/gi, "").toLowerCase();
  let left = 0;
  let right = filterS.length - 1;

  while (left < right) {
    if (filterS[left] !== filterS[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};
// @lc code=end
// 解法：
// 1. 双指针遍历，遇到不同返回 false
