/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// 解法
// 1. BFS 第一次计算为0，其树的高度即为所需硬币个数 可以尝这个解法
// 2. DP
//  a. subproblems
//  b. DP array dp[0] = 0, dp[1] = 1, dp[2] = min(dp[2], dp[2-coin] + 1)
//  c. DP 方程

// exmaple 讲解
// coins = 1,2,3   amount = 3
// init new array+1 fill Infinity
// dp[0] = 0
// ---------------------------------
// 重要
//            由于.fill Inifinity 所以这里一直会是最大值跟相对的 coin 相减对比，所以对比一定比较小
// if dp[i] = Math.min(dp[i], dp[i-coin] + 1)
