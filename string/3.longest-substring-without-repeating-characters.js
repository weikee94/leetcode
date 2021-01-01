/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // first attempt
    let checkList = new Set();
    let longest = 0;
    let windowLongest = 0;
    for(let i = 0; i < s.length; i++) {
        if(!checkList.has(s[i])) {
            checkList.add(s[i])
            windowLongest+=1;
            longest = Math.max(longest, windowLongest)
        } else {
            windowLongest = 0;
        }
    }
            
    return longest;
};
// @lc code=end

