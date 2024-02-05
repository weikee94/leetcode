/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let splitArr = s.split(" ");
  if (s.length === 0) {
    return 0;
  } else {
    for (let i = splitArr.length; i >= 0; i--) {
      if (splitArr[i - 1] !== undefined && splitArr[i - 1].length > 0) {
        return splitArr[i - 1].length;
      }
    }
    return 0;
  }
};
// @lc code=end
// 这题第一次做就通过了
// 1. 先split ' ', 找到array length
// 2. array 里第一个有长度即为答案 不可直接返回最后一个因为会有 ' aa aa aaa   ' 这种情况会出错
