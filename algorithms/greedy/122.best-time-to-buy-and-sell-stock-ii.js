/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  // let i  = 1, 因为我们要拿第二天跟第一天compare
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// @lc code=end
// 解法
// 1 greedy algo
//   只要确认第二天高过第一天，我们就在第一天买第二天卖，依次类推得到答案
