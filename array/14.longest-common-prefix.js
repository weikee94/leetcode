/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // return "" when there is no item inside array
  var ans = "";

  if (!strs) {
    return ans;
  }

  // 1. find the shortest because prefix cant be longer than the words
  var max = strs[0];

  for (let val of strs) {
    if (val.length < max.length) {
      max = val;
    }
  }

  if (max !== undefined) {
    // 2. array.every compare for each char of
    for (let i = 0; i < max.length; i++) {
      // every methods return boolean value
      let flag = strs.every((item) => item[i] == max[i]);
      if (flag) {
        ans += max[i];
      } else {
        break;
      }
    }
  }

  return ans;
};
// @lc code=end

// 解法：
// 1. 你可以想象最长 prefix 一定是最短字母
// 2. compare every to the 最长 prefix
// 3. 每次找到一样的就加进去 ans
// 4. edge case: 空数组直接返回 ""
