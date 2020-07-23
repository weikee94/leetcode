/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let finalArr = [];
  let obj = {};

  // loop array 1 and map to object; for of
  for (let i of nums1) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }

  // loop array 2 check whether inside obj
  for (let i of nums2) {
    if (obj[i]) {
      obj[i]--; // this can exclude the same number loop twice
      finalArr.push(i);
    }
  }

  // return
  return finalArr;
};
// @lc code=end

// 1. 暴力解：most easier will be two nested loop O(n^2)

// 2. 解法：思考这类有重复在一数组，用 MAP
//    time complexity: O(m+n)
