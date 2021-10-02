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



// 2/10/2021
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    // 先判断数组是不是多过三个
    if(nums.length < 3) {
        return []
    }
    
    // sort the array
    let sortedArr = nums.sort((a, b) => a - b)
    
    // result 
    let result = []
    
    // 开始遍历数组
    for(let i = 0; i < sortedArr.length; i++) {
        
        // 如果当前值大过0直接退出，因为已经排序了不可能后面相加还会等于0
        if(sortedArr[i] > 0) {
            return result;
        }
        
        // 当前循环的值和上次循环的一样，就跳过，避免重复值
        // 因为它会确保当前值匹配的都搜完才去下一个循环
        // 就是说已经确保拿到所有解了已经，下一个一样的号码直接跳过
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
          continue;
        }
        
        // two pointers
        let l = i + 1;
        let r = sortedArr.length - 1;
        
        while(l < r) {
            let temp = sortedArr[i] + sortedArr[l] + sortedArr[r];
            
            if(temp < 0) {
                l++;
            }
            
            if(temp > 0) {
                r--;
            }
            
            if(temp === 0) {
                result.push([sortedArr[i], sortedArr[l], sortedArr[r]]);
                
                 // 跳过重复值
                while(l < r && nums[l] === nums[l + 1]) {
                  l ++;
                }
                // 同上
                while(l < r && nums[r] === nums[r - 1]) {
                  r --;
                }
                
                l++;
                r--;
            }
        }
    }
    
    return result;
};

// 思路
// 先把数组排序
// 遍历数组
//   如果当前值>0因为已经排序所以后面不可能相加等于0
// 双指针
//   l = i + 1, r = arr.length - 1;
//   依次循环检查相加等不等于0
//     如果等于0 确保下个l r 不是之前值