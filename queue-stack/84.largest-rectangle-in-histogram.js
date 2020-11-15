/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0, n = heights.length, left, right;
      
      for(let i = 0; i < heights.length; i++) {
          left = i-1;
          right = i + 1;
          while(left >= 0 && heights[left] >= heights[i]) left--;
          while(right < n && heights[right] >= heights[i]) right++;
          maxArea = Math.max(heights[i] * (right - left - 1), maxArea);
      }
      return maxArea;
  };
  // @lc code=end
  
  // 解题思路
  // 1. 先设定一根的高度为pivot 
  // 2. 然后向左跟右依次扩散，遇到更高的, left-- , right++
  // 3. 每次记录高度compare 
  // 4. 这题画图才做出来，need review more