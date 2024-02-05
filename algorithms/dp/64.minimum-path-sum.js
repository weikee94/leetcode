/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // grid[0]: first row
  // grid[0][0]: first row first column

  const m = grid.length;
  const n = grid[0].length;

  if (grid.length === 0) {
    return 0;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = grid[i][j];
      } else if (i === 0 && j !== 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (j === 0 && i !== 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
      }
    }
  }

  return grid[m - 1][n - 1];
};

// 解法
// 1. DP
//  1.1 每次只能向下或向右且取最小值
//  1.2 得出 dp 方程  grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j]
//  1.3 小技巧，由于只能向下或向右所以当数组 长这样
//      [1,2]
//      [4,5,6]
//      [7,8,9]
//      let m = grid.length = 3
//      let n = grid[0].length = 2
//      我们找的最小值在 8 这里，最后返回 grid[m-1][n-1] = grid[2][1] 即可 而不是返回grid[2][2]
