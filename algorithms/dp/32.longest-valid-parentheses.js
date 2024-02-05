/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let dp = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      // 思考这个怎么运行
      if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
        // 这里用来判断 dp[-1] === undefined 的情况，其实可以做的更好
        // 想想有什么好的方法
        if (dp[i - dp[i - 1] - 2] === undefined) {
          dp[i] = dp[i - 1] + 2;
        } else {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        }
      }

      // 下面是我的方法，可是dp[-1] 没办法解决，思考这个问题 🤔
      // if (s[i - 1] === "(") {
      //   dp[i] = dp[i - 2] + 2;
      // } else {
      //   dp[i] = dp[i - 1] + 2 + dp[i - (dp[i - 1] + 2)];
      // }
    }
  }
  return Math.max(...dp);
};
// @lc code=end
// 解法 (需要重做这题)
// 1. DP
//    1.1 当 s[i] 为 (, dp[i] === 0， 因为不可能成为有效括号
//    1.2 当 s[i] 为 ),
//          当 s[i-1] 为 (, dp[i] = dp[i-2] + 2
//          当 s[i-1] 为 ), dp[i] = dp[i-1] + 2 + dp[i-(dp[i-1] + 2)]

// 2. Stack 可以试看看这个如何做？
