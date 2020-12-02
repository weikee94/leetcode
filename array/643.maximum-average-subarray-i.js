/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let finalMax = Number.NEGATIVE_INFINITY;
    // handle 只有一个号码的情况
    if(nums.length === 1) {
        return nums[0]
    }
    for(let i = 0; i <= nums.length - k; i++) {
        let max = 0;
        for(let j = 0; j < k; j++) {
            // 这里的 i + j 就是slide window 的精髓
            max += nums[i+j];
        }
        if(max > finalMax) {
            finalMax = max;
        }
    }
    return finalMax / k;
};

// 解题思路 (sliding window)
// 1. 暴力法 (两层循环) O(n^2) 
