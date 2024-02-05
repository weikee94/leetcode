/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x.toString().split('').reverse();
    var res = parseInt(num.join(''));
    if(res>2**31) return 0;
    return x > 0 ? res : -res
};
// @lc code=end

