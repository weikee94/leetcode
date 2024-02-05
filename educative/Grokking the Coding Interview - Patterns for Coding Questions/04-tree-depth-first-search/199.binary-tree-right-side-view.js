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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // return most right on every single level 

    // base case
    if(!root) {
        return [];
    }
    const rside = [];

    function dfs(node, level, rside) {
        if(level === rside.length) {
            rside.push(node.val)
        }

        for(const child of [node.right, node.left]) {
            if(child) {
                dfs(child, level + 1, rside);
            }
        }
    }

    dfs(root, 0, rside);

    return rside;


};