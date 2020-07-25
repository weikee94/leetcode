/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var leftIndex = 0;
  var rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    [s[leftIndex], s[rightIndex]] = [s[rightIndex], s[leftIndex]];
    leftIndex++;
    rightIndex--;
  }
  return s;
};
// @lc code=end
// 解法：
// 双指针左右开始向内移动
