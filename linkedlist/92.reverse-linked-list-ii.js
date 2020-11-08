/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head) {
        return head;
    }

    var dummy = new ListNode();
    dummy.next = head;
    var prev = dummy;

    for(let i = 0; i < m - 1; i++) {
        prev = prev.next;
    }

    // find the first one to reverse
    var pivot = prev.next;

    for(let i = 0; i < n - m; i++) {
        //找到第一个交换的点下指针
        var nextN = pivot.next;

        // 下面两步是交换的重点思考
        pivot.next = nextN.next;
        nextN.next = prev.next;

        // 更新第一个点去刚刚第一个交换点的下指针
        prev.next = nextN;

    }

    return dummy.next;
};
// @lc code=end
// 解题思路
// 1. 找到第一个要换的node right before in reverse range, i call prev
// 2. 第一个在reverse range 里的, i call pivot


// prev   pivot
// 1 ->     2 ->    3    -> 4
// |        |       |
// |----------------^    第四步
//          |
//          | --------------^  第二步   
//                  |     
//          ^_______|    // 第三步
//
// var nextN = pivot.next
// pivot.next = nextN.next // 第二步
// nextN.next = prev.next  // 第三步
// prev.next =  nextN      // 第四步
