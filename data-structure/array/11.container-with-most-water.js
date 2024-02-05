/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let minHeight = height[i] < height[j] ? height[i++] : height[j--];
    let area = (j - i + 1) * minHeight;
    max = Math.max(max, area);
  }
  return max;
};
// @lc code=end

// 1. 暴力解法，遍历两次且一一对比
// 2. 采用双指针方式，依次比较高度向内，当左右相遇，返回最大值即可
// 为什么是 i + 1; let area = (j - i + 1) * minHeight;
// console 且设test case 为 [1,8] 就明白了
