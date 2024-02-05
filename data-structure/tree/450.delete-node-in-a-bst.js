/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // check if empty
  if (!root) {
    return root;
  }

  if (key < root.val) {
    // go left side
    // 1. assign the root.left as root
    // 2. then recursive call
    // 3. remember return from deleteNode
    root.left = deleteNode(root.left, key);
  }

  if (key > root.val) {
    // go right side
    // 1. assign root.right as root
    // 2. then recursive call
    // 3. remember return from deleteNode
    root.right = deleteNode(root.right, key);
  }

  if (key === root.val) {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.right) {
      root = root.left;
    } else if (!root.left) {
      root = root.right;
    } else {
      let node = findLeftMax(root.left);
      root.val = node.val;
      root.left = deleteNode(root.left, node.val);
    }
  }

  return root;
};

function findLeftMax(head) {
  let current = head;
  while (current.right) {
    current = current.right;
  }
  return current;
}
// @lc code=end
// 解法：
// 1. 遍历
// 2. match the key, replace node.val to node.left || node.right if there is only one child
// 3. if there are two child node, find the biggest but smaller than current (left side) || find the smallest but bigger than current (right side)
