/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // avoid object reference
  const cloneNums = [...nums];
  nums.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }

  while (left <= right) {
    // seperate length to two
    let mid = parseInt(left + (right - left) / 2);
    if (nums[mid] === target) return cloneNums.indexOf(target);
    if (nums[mid] > target) {
      // move position
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end
// 解法 (看别人的解法：应该是不需要用到nums.sort 才对；ps: 我这个可能是取巧了)
// 1. 使用二分查找

// 别人的解法, 思考为什么要用等号？🤪
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find mid point
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // check whether left or right side is sorted array
    // if nums[left] > nums[mid], means sorted on right else on left
    if (nums[left] >= nums[mid]) {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
