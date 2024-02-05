/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 解法 1 当前数一直乘到指定数，判断是否为n 即可
  // let start = 1;
  // while(start < n) {
  //     start = start * 2;
  // }
  // return start === n;

  // 解法 2
  // bit manipulation
  if (n > 0) {
    // !0 等于 true
    // !1 等于 false
    if (!(n & (n - 1))) {
      return true;
    }
  }
  return false;
};

// Bit Manipulation
//     2 -> 0 0 0 1 0
//     1 -> 0 0 0 0 1
// 2 & 1 -> 0 0 0 0 0
// !0 等于 true
// !1 等于 false
// 从上面的例子我们可以发现 n & n-1 === 0 即证明 n 是 2 的倍数
