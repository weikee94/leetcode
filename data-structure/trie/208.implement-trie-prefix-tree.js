/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  // 这里是为了标记最后一个字母是什么
  // example "ap"
  // {a: {p: {isWord: {true}}}}
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.traverse(word);
  return node !== null && node.isWord === true;
};

Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (let c of word) {
    if (node[c]) {
      node = node[c];
      // 每次遍历都进去下一层
      // {a: {p: {isWord: {true}}}} -> {p: {isWord: {true}}} -> isWord: {true}
    } else {
      return null;
    }
  }
  return node;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this.traverse(prefix);
  return node !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 1. 这个记得模版即可 🤖
