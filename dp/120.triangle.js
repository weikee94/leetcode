/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};
// @lc code=end
// 解法
// 1. 自底向上
// 2. 从倒数第二层开始
// 3. triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]); 建议画图更好理解

// 1
// 2，3
// 4，5，6
// ｜
// ｜
// ｜
// 1
// 6，8            2+min(4,5)=6       3+min(5,6)=8
// 4，5，6
// ｜
// ｜
// ｜
// 7               1+min(6,8)=7
// 6，8
// 4，5，6
