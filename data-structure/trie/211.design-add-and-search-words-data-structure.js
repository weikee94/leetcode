/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (let c of word) {
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.traverse(word, 0, this.root);
};

WordDictionary.prototype.traverse = function (word, index, node) {
  if (index == word.length) return node.isEnd == true;

  if (word[index] == ".") {
    for (let key in node) {
      // dfs
      if (this.traverse(word, index + 1, node[key])) return true;
    }
  } else {
    if (node[word[index]]) {
      // dfs
      return this.traverse(word, index + 1, node[word[index]]);
    }
  }
  return false;

  // My Approach but failed with some cases, need dig to find out
  // i take a similar approach just have another additional for loop
  //     if (index === word.length) {
  //         return trie;
  //     }

  //     for(let i = index; i < word.length; i++) {
  //         if(word[i] === '.') {
  //             for(let key in trie) {
  //                 trie = trie[key]
  //                if( this.traverse(word, i + 1, trie)) return true;
  //             }
  //         } else {
  //             if(trie[word[i]]) {
  //                 trie = trie[word[i]]
  //                return this.traverse(word, i + 1, trie)
  //             } else {
  //                 return false
  //             }
  //         }
  //     }
  //     return false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// 解题思路
// 1 跟208 很像 just tweak abit the details when serach which include . condition which is match with any alphabets
