// 29/09/2021
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right) {
        let mid = Math.floor(left + (right-left) / 2);
        if(nums[mid+1] > nums[mid]) {
            // 如果 mid + 1 更大说明在向上爬波，之后一定有峰，题目说明nums[-1] = nums[n] = -∞
            left = mid + 1;
        } else {
            // 如果 mid 更大证明前面有峰
            right = mid;
        }
    }
    
    return left;
};

// 思路
// 1. 爬山法 且题目规定 不存在连续相同数字