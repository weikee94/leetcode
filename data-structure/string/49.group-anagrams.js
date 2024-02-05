/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let resultMap = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");

    if (!resultMap[sortedStr]) {
      resultMap[sortedStr] = [strs[i]];
    } else {
      resultMap[sortedStr].push(strs[i]);
    }
  }

  return Object.values(resultMap);
};
// @lc code=end
// 解法：
// 1. 重点思路在于想到使用 sort 把每一个遍历的都 sort
// 2. 把sort 后的str 当作key
// 3. 接着就像是依次排入 hash map 那样
// 4. 最后利用 Object.values(map) 特性把 values 都输出即可 😎
