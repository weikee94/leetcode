var nums = [2, 1, 4, 2, 5];
var findErrorNums = function(nums) {
  var returnArray = [];
  nums.sort(function(a, b) {
    return a - b;
  });

  let dup = -1;
  let missing = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      // 如果第二個跟第一個相同，duplicate update value
      dup = nums[i];
      // [1,2,3,3,5] 這種情形會用到下面這行
      // 當i=4時，5 > (3 + 1)
      // missing 就會是4
    } else if (nums[i] > nums[i - 1] + 1) {
      missing = nums[i - 1] + 1;
    }
  }
  returnArray.push(dup);
  returnArray.push(
    // 下面是解決[1,1]這種missing情況
    nums[nums.length - 1] !== nums.length ? nums.length : missing
  );
  return returnArray;
};
