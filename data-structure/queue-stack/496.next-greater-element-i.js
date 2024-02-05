/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let nums2Map = {};
  let myStack = [];
  for (let i = 0; i < nums2.length; i++) {
    // 重点这个while loop
    while (myStack.length > 0 && myStack[myStack.length - 1] < nums2[i]) {
      nums2Map[myStack.pop()] = nums2[i];
    }
    myStack.push(nums2[i]);
  }
  myStack.map((num) => (nums2Map[num] = -1));

  return nums1.map((num) => nums2Map[num]);
};
// @lc code=end
// 解法：
// 1. 设置一个map 储存 num2 next greater number
// 2. 因为步骤一已经 map next greater number, 所以遍历nums1 就可以得到结果
