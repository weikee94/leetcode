/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let objMap = {};
  for (let i = 0; i < s.length; i++) {
    objMap[s[i]] = objMap[s[i]] ? objMap[s[i]] + 1 : 1;
  }

  for (let j = 0; j < s.length; j++) {
    if (objMap[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};
// @lc code=end
// 解法：
// 1. 先用hashmap 把各个字母出现次数对应
// 2. 接着循环即可
