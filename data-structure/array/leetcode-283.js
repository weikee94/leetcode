var nums = [0, 1, 0, 3, 12];
var moveZeroes = function(nums) {
  var index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  console.log(index); // 3
  // 當 3 < 5
  // nums[3] = 0; 這時 nums = [1, 3, 12, 0]
  // index + 1

  // 當 4 < 5
  // nums[4] = 0; 這時 nums = [1, 3, 12, 0, 0]
  // index + 1

  // 當 5 < 5
  // 沒有小於 退出；
  while (index < nums.length) {
    nums[index++] = 0;
  }
  console.log(nums);
};
