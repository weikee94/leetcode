/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j = 0;
    if(needle.length === 0) {
        return 0;
    }
    
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[j]) { 
            if(j === needle.length - 1) {
                return i - j;
            }
            j++;
        } 
    	else {
            i -= j;
            j = 0;
    	}
    }
    return -1;
};
// @lc code=end

