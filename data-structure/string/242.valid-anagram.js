/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < s.length; i++) {
      mapS[s[i]] = mapS[s[i]] ? mapS[s[i]] + 1 : 1;
    }
    for (let j = 0; j < t.length; j++) {
      mapT[t[j]] = mapT[t[j]] ? mapT[t[j]] + 1 : 1;
    }
    for (let data in mapS) {
      if (mapS[data] !== mapT[data]) {
        return false;
      }
    }

    return true;
  }

  return false;
};
// @lc code=end
// 解法：
// 1. 遍历加进 map
// 2. compare 两个map即可
