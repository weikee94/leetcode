/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let returnArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        returnArr.push(i + 1);
        returnArr.push(j + 1);
      }
    }
  }
  return returnArr;
};
// @lc code=end
// 暴力解
// 1. 两次循环
// 2. 双指针 O(n)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 2. 双指针 O(n)
var twoSum = function(numbers, target) {
  // two pointer solution
  var start = 0, end = numbers.length - 1;
  while(start < end) {
      if(numbers[start] + numbers[end] === target) {
          return [start + 1, end + 1]
      } else if(numbers[start] + numbers[end] < target) {
          start++;
      } else {
          end--;        
      }
  }
};
