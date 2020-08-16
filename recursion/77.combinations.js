/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let availableNum = [];
  let result = [];
  for (let i = 1; i <= n; i++) {
    availableNum.push(i);
  }

  var helper = function (temp, index) {
    // terminator

    // 判断长度有没有大过 k 值
    if (temp.length > k) {
      return;
    }

    // 长度相同 push to result
    if (temp.length === k) {
      result.push(temp.slice());
      return;
    }

    // process current
    // 处理当前逻辑
    for (let i = index; i < availableNum.length; i++) {
      temp.push(availableNum[i]);
      helper(temp, i + 1);
      temp.pop();
    }

    // drill down
  };

  helper([], 0);
  return result;
};
// @lc code=end
// 解法
// backtracking 套路 对比上面可以发现其实有套路
// result = []
// def backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return

//     for 选择 in 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择
