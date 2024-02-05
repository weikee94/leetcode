/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      // mid < right means mid to right sorted and mid is the min in [mid, right]
      right = mid;
    } else {
      // mid > right, imagine mid is 9 right is 2 [9,0,1,2], then move left
      left = mid + 1;
    }
  }
  return nums[left];
};
// @lc code=end
// 解法
// 1. 暴力 O(n)

// 解法 2
// 2. 二分查找



// 28/09/2021

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  // 这里判断为什么不能用等于？？
  while(left < right) {
      let mid = Math.floor((left) + (right-left)/2);
      
      if(nums[mid] > nums[right]) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  
  return nums[left]
};

// 可能会有的疑惑
// - nums[mid] > nums[right]为什么肯定是 left = mid + 1, 因为假设旋转过后第一个要排在right 的后面那么必定是比right 大，不可能出现同时mid > right 且最小数在left 