/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let result = [];
  // 四联通 坐标
  const coordinatesArr = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // build trie
  const buildTrie = () => {
    const root = {};
    for (let word of words) {
      let node = root;
      for (let c of word) {
        if (!node[c]) {
          node[c] = {};
        }
        node = node[c];
      }
      // 下面这个为了后面判断 node.word !== null, 证明这个在 trie 树里面所以加进result
      node.word = word;
    }
    return root;
  };

  // dfs search
  const search = (node, x, y) => {
    // terminator
    if (node.word != null) {
      result.push(node.word);
      node.word = null; // 确认只加一次
    }

    // 判断边界x, y 是否走到 -1 which is not valid 或者 x, y 超出 board 长度
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    // drill down
    const char = board[x][y];
    board[x][y] = "#"; // mark as visited
    for (const [dx, dy] of coordinatesArr) {
      const i = x + dx;
      const j = y + dy;
      search(node[char], i, j);
    }

    // 恢复当前层状态 reset state
    board[x][y] = char;
  };

  // go throught 2d array
  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return result;
};
// @lc code=end
// 解法
// 1 建立 trie 树
// 2 建立 dfs search function
// 3 遍历 2d array
// 4 学会四联通坐标用来 dfs 上下左右扩散遍历
