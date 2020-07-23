/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
// @lc code=end

// 解法：
// 1. 利用双指针
// 2. 依次判断当下和之后一个
// 3. let j = 0; 是解题重点
