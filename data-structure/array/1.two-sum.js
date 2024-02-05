/**
 * @author [wk]
 * @create date 2020-11-13 17:20:16
 * @modify date 2020-11-13 17:20:16
 * @desc [1] Two Sum
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 暴力解法
  // let ans = [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       ans.push(i);
  //       ans.push(j);
  //     }
  //   }
  // }
  // return ans;

  // 更好解法 hashmap
  let objMap = {};
  for (let i = 0; i < nums.length; i++) {
    let nextVal = target - nums[i];

    // check whether value inside map keys
    // 这里是重点判断
    if (nextVal in objMap) {
      return [objMap[nextVal], i];
    }

    objMap[nums[i]] = i;
  }
};
// @lc code=end

// 暴力解法
// 循环两次求和

// 更好解法
// 1 使用 hashmap 推荐
