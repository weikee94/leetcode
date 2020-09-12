/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Friend Circles
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  class UnionFind {
    // init disjoint set
    constructor(n) {
      this.parent = [...new Array(n).keys()];
      this.groups = n;
    }

    // find
    find(n) {
      while (n !== this.parent[n]) {
        this.parent[n] = this.parent[this.parent[n]];
        n = this.parent[n];
      }
      return n;
    }

    // union
    union(x, y) {
      let m = this.find(x);
      let n = this.find(y);
      if (m === n) return;
      this.parent[n] = m;
      this.groups--;
    }
  }

  const unionFind = new UnionFind(M.length);
  console.log(unionFind);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }

  return unionFind.groups;
};
// @lc code=end
// 解法：
// 1. disjoint set 模版 constructor, find, union
// 2. 当遇到值为1，call union method, 如果集合代表相同证明在同个集合，groups -1，最后 return groups
