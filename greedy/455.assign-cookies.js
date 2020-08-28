/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const sortFunction = function (a, b) {
    return a - b;
  };

  g.sort(sortFunction);
  s.sort(sortFunction);
  let i = 0;
  for (let cookie of s) {
    if (cookie >= g[i]) {
      i++;
    }
  }
  return i;
};
// @lc code=end
