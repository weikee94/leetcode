/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];
  // 为什么下面这个不行 🤨？
  // let visited = nums.fill(false);
  let visited = Array(nums.length).fill(false);
  nums.sort((b, a) => b - a);

  var helper = function (accumulateItem, visited) {
    // terminator
    if (accumulateItem.length === nums.length) {
      result.push(accumulateItem.slice());
      return;
    }
    // process current
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]))
        continue;

      visited[i] = true;
      accumulateItem.push(nums[i]);
      helper(accumulateItem, visited);
      visited[i] = false;
      accumulateItem.pop();
    }

    // drill down
  };

  helper([], visited);

  return result;
};
// @lc code=end
// 解法 (这个题目必须重复多看，因为是画递归树推导出来的) 🤪
// 1. backtracking
