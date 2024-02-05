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
    let seen = new Set();
    let longest = 0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        while(seen.has(s[windowEnd])) {
            // 这里是重点
            // 当我们遇见重复的值，由于我们用了windowStart 作为标记，所以我们从那个标记点开始删除
            // 直到遇见不重复的，且每次执行都把 windowStart 加一
            seen.delete(s[windowStart++])
        }
        seen.add(s[windowEnd])
        longest = Math.max(longest, windowEnd - windowStart + 1)
    }
            
    return longest;
};
// @lc code=end

