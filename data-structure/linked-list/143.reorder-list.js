/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var stackArr = [];
    var refHead = head;
    if (!refHead) return

    while(refHead) {
        stackArr.push(refHead)
        refHead = refHead.next;
    }

    var node = head;
    var stackLength = stackArr.length;
    for(let i = 0; i < stackLength; i++) {
        // 这里一开始想不到，根据题意先拿尾部的值再拿头部值以此类推
        if(i % 2 === 0) {
            node.next = stackArr.shift()
        } else {
            node.next = stackArr.pop()
        }
        node = node.next;
    }
    node.next = null;
};
// @lc code=end
// 解题思路
// 1. init stack to store value
// 2. pop() and shift() 用来node的next 指针