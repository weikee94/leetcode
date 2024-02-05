/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbolMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let value = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(symbolMap[s[i]] < symbolMap[s[i+1]]) {
            value = value - symbolMap[s[i]]
        } else {
            value = value + symbolMap[s[i]]
        }
    }
    
    return value;
};
// @lc code=end
// 解题方法
// 1 数学

