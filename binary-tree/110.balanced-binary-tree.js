/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // handle when tree is null
  if (root === null) {
    return true;
  }

  let flag = true;

  function getTreeHeight(node) {
    let leftHeight = 0;
    let rightHeight = 0;
    let maxHeight = 0;
    if (node.left === null && node.right === null) {
      return 0;
    }
    if (node.left !== null) {
      leftHeight = 1 + getTreeHeight(node.left);
    }

    if (node.right !== null) {
      rightHeight = 1 + getTreeHeight(node.right);
    }
    maxHeight = Math.max(leftHeight, rightHeight);
    if (maxHeight - leftHeight > 1 || maxHeight - rightHeight > 1) {
      flag = false;
    }
    return maxHeight; // recursion always return value back
  }

  getTreeHeight(root);

  return flag;
};

// @lc code=end

// 解法：
// 1. get LeftSubTreeHeight
// 2. get RightSubTreeHeight
// 3. Math.max(lsth, rsth)
// 4. if Math.max(lsth, rsth) - one of those subtreeHeight > 1 ? false : true
