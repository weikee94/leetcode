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



// 27/09/2021
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
  let rowIndex = getTheTargetRow(matrix, target);

  if (rowIndex < 0) {
    return false;
  }

  let result = searchOnRowIndex(matrix[rowIndex], target);

  return result;
};

const getTheTargetRow = (matrix, target) => {
  let left = -1;
  let right = matrix.length - 1;

  // 这里为什么不能使用 <=
  while (left < right) {
    let mid = Math.floor(left + (right - left + 1) / 2);

    // 这里为什么不能使用 >    
    if (matrix[mid][0] <= target) {
      left = mid
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const searchOnRowIndex = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return true;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

// 思路 两个二分查找
// 先找出target在哪个区间
// 然后在那个区间binary search
// 难点在getTargetRow 里面的while 循环
// left = -1 是其中一个细节， 如果设置为0，上面判断rowIndex < 0 会永远走不到， 因为设了-1 所以Math.floor 那里的left 要加一






