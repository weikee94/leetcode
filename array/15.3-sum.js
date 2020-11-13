/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [];
    if(nums.length < 3) {
        return ans;
    }
    nums.sort((a,b) => a - b);
    for(var i = 0; i < nums.length; i++) {
        // 当已经遍历到 i > 0 就已经没有可能相加为0了因为是排序后的数组
        // 后面的值肯定更高
        if(nums[i] > 0) {
            break;
        }
        if(nums[i] === nums[i-1]) {
            continue;
        }
        var L = i + 1;
        var R = nums.length - 1;

        while(L < R) {
            var sum = nums[i] + nums[L] + nums[R];
            if(sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                // 下面这两步第一次做没想出来
                while(L < R && nums[L] === nums[L+1]) {
                    L++; // 去重
                }
                while(L < R && nums[R] === nums[R-1]) {
                    R--; // 去重
                }
                L++;
                R--;
            } else {
                if(sum < 0) {
                    L++;
                } else {
                    R--;
                }
            }
        }
    }

    return ans;
};
// @lc code=end
// 解题思路
// 这题自己没想出来，下面是思路
// 先排序数组，设定三个指标
// [-4,-2,-1,1,0,2,3]
//   i  L          R 
//  一开始 i 是排序后数组第一位，L 指标是 i + 1, R 是数组最后一位
// 如果检测到 arr[i] + arr[L] + arr[R] === 0, 加进答案数组中
// 如果没有
//   sum < 0, L++
//   sum > 0, R--
