// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var searchRange = function(nums, target) {
//     // 第一种解法
//     // 暴力解，一次
//     let ans = []
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === target) {
//             ans.push(i)
//         }
//     }
//     let result = []
//     result[0] = ans[0]
//     result[1] = ans[ans.length-1]
//     return result[0] === undefined ? [-1,-1] : result;
// };

/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 判断边界条件
  if (nums.length === 0) {
    return [-1, -1];
  }

  let low = 0,
    high = nums.length - 1,
    mid;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  // 如果第一position 不是代表找不到
  if (nums[low] !== target) return [-1, -1];

  let start = low;
  high = nums.length - 1;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  // 这里多思考为什么这么写可以
  let end = nums[low] === target ? low : low - 1;

  return [start, end];
};
// @lc code=end

// 解题思路
// 1. binary search
// 2. 找出第一个position
// 3. binary search [第一个position, nums.length-1]
