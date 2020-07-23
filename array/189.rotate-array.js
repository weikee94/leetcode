/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //   my attempt (some edge case havent solve)
  //       var c = [...nums];
  //       var j = 0;
  //       for(let i = 0; i< nums.length; i++) {
  //           if (k > 0) {
  //                nums[i] = nums[nums.length-k];
  //               k--;
  //           }
  //           else {
  //               if (j < (nums.length-k)) {
  //                   nums[i] = c[j];
  //                   j++;
  //               }
  //           }
  //       }
  //   第二种解法
  //   The splice() method adds/removes items to/from an array,
  //   and returns the  removed item(s); this will change original array
  nums.unshift(...nums.splice(nums.length - k));
};
