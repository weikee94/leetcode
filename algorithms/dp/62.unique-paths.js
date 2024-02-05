/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let oneDimension = new Array(m + 1).fill(0);
  let twoDimension = oneDimension.map((val) => new Array(n + 1).fill(0));

  // we directly start from 1 since we declare outer fill with 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // check if i , j === 1, means top left
      if (i === 1 && j === 1) {
        twoDimension[i][j] = 1;
      } else {
        twoDimension[i][j] = twoDimension[i][j - 1] + twoDimension[i - 1][j];
      }
    }
  }

  return twoDimension[m][n];
};
// @lc code=end
// 解法
// 1. dp 2 dimension array
// 2. 先画一个简单的二维 然后找出 dp 状态转移方程 twoDimension[i][j] = twoDimension[i][j - 1] + twoDimension[i - 1][j];
// 3. 要点：边界都只可以是1， 当i===1 && j===1 使用上面的状态方程会out boundary，所以我们先定义最外围是0 来解决这个问题
