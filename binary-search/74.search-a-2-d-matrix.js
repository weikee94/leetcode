/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let targetArr = [];
  // find the target in which row
  for (let row of matrix) {
    // 这里是判断在那一行
    if (row[0] <= target && row[row.length - 1] >= target) {
      targetArr = [...row];
    }
    continue;
  }

  let left = 0;
  let right = targetArr.length - 1;

  // 二分在找到那行
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (targetArr[mid] === target) {
      return true;
    }

    if (targetArr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

// @lc code=end
// 解法
// 1. 二分查找，难点在于边界条件要想清除，要多做这类题目 left right 要不要加减要多判断
