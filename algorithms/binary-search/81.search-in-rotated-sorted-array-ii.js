/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find the mid pivot
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] > nums[mid]) {
      // right sorted
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] === nums[left]) {
      // 这里的判断是解题关键不同于33题
      left += 1;
    } else {
      // left sorted
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};
// @lc code=end
// 解法
// 1. 二分查找， 不同于33 题是这个具有重复性质，可以多看别人解法
