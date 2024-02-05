/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // Solution one, brute force O(n)
  // let objMap = {}
  // let result = []
  // for(let i = 0; i < nums.length; i++) {
  //     objMap[nums[i]] = objMap[nums[i]] ? objMap[nums[i]] + 1 : 1;
  // }
  // for(let [key, value] of Object.entries(objMap)) {
  //     if(value === 2) {
  //         result.push(key)
  //     }
  // }
  // return result;

  // Solution two, O(1), when looping check whether the number see before
  // we multi the number with negative one, so when loop again we found the number is negative,
  // we know we saw this before

  const result = [];
  // handle outer boundary issues
  nums.unshift(0);

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]);
    if (nums[idx] < 0) result.push(idx);
    nums[idx] *= -1;
  }
  return result;
};
