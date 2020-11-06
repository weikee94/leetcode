/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    
    // 当前node
    var cur = head;
    
    // 当前node 下一个值
    var nextCur = head.next;
    
    // 当换了前两个，我们要从第三个开始
    var nextNextCur = head.next.next;
    
    // 把当前node下一个值的指针指向当前node, 既可以完成 [2,1,2,3,4]
    nextCur.next = cur;
    
    // 把当前node 下一个指针指向 [3,4] 传回来的值, 也就是head.next.next;
    cur.next = swapPairs(nextNextCur);
    
    return nextCur;
};

// @lc code=end
// 解题思路
// 这题一开始有想法可是实现不出来，需要review again
// 1. 每次置换后，把需要转换的数组传进递归里 

