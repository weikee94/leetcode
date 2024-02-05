/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // this example will be 3 + 3 - 1 = 5 since array is 0 -> 5
  let insertPosition = m + n - 1;

  // array index start from 0 so when init minus 1
  m = m - 1;
  n = n - 1;
  while (n >= 0) {
    nums1[insertPosition] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    insertPosition--;
  }

  // my solution will create new array
  //   const finalSize = m + n;nums1
  //     .concat(nums2)
  //     .sort((a, b) => a - b)
  //     .filter((n) => n !== 0)
  //     .slice(0, finalSize + 1);
};
// @lc code=end
// 解法
// 1. 倒入式插入
