/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // const arr = new Array(26).fill(0);

  // The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.s

  // A.charCodeAt(0): 65
  // B.charCodeAt(1): 66
  // C.charCodeAt(2): 67

  // range 65 - 90
  // upper-case English letter

  // base case
  if (n === 0) {
    return tasks.length;
  }

  let map = {};
  for (let i = 0; i < tasks.length; i++) {
    map[tasks[i]] = map[tasks[i]] ? map[tasks[i]] + 1 : 1;
  }

  // max 该char 出现的最多次数
  // count 多少个 char 同样出现 max 次数的
  let max = 0;
  let count = 0;

  Object.keys(map).map((val) => {
    if (map[val] > max) {
      max = map[val];
      count = 1;
    } else {
      if (map[val] === max) {
        count += 1;
      }
    }
  });

  return Math.max((max - 1) * (n + 1) + count, tasks.length);
};

// 解法
// 1 DP
// [A,A,A,B,B,B,C,C] max = 3, count = 2, n = count down time for each same task
//   1.1 找出最多的 char A , B
//   AB...AB...AB
//   ... 可以填 idle 或者 C, 其他任务都比 A,B 少，所以填在它们之间
//   AB...AB...AB => AB...AB... AB
//   AB...AB... = Math.max((max - 1) * (n + 1) 思考这个怎么出来是这题关键
//   AB = count
