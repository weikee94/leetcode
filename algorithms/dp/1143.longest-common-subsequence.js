/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = new Array(text1.length + 1)
    .fill(0)
    .map((value) => new Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[text1.length][text2.length];
};
// 解法
// 1. dp, 先画出 DP table
// 2. 然后找出 dp 状态转移方程，如果两字母 i j 相等，dp[i][j] = 1 + dp[i-1][j-1]
//                          如果不相等 则取最大值  dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
// ---------------------------
// 范例
// lcs('aab','azb')
// 1 + lcs('aa', 'az')
//     max(lcs('a', 'az'), lcs('aa','a'))
//       max(lcs('', 'az'), lcs('a','az'))     max(lcs('aa', 'a), lcs('aa', ''))
//       max(0, 1)                             max(1, 0)
//     max(1,1)
// 1 + 1 = 2
// lcs for this question is 2
