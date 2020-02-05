var nums = [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1];
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      current++;
    } else {
      if (current > max) {
        max = current;
      }
      current = 0;
    }
  }

  // 這裡用 Math.max 可以解決如果nums是[1]
  // 因為 current 沒有大過 max 所以直接return max 會報錯
  return Math.max(max, current);
};
