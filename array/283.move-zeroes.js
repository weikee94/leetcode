/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1. loop, swap non zero to zero position

var moveZeroes = function (nums) {
  let j = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      let temp = nums[j];
      nums[j] = nums[index];
      nums[index] = temp;
      j++;
    }
  }
};
// @lc code=end

// method two
// 先交换，最后比较长度加零在尾巴
// O(2n) ~ O(n)
// var moveZeroes = function(nums) {
//     let index = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//             nums[index++] = nums[i]
//         }
//     }
//     while(index < nums.length) {
//         nums[index++] = 0;
//     }
// };
