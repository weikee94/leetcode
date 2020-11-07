/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    // terminator
    if(!head || !head.next) {
        return head;
    }
    var dummy = new ListNode();
    dummy.next = head;
    var executionNode = dummy;
    
    while(executionNode.next) {
        if(executionNode.next.next && executionNode.next.val == executionNode.next.next.val) {
            var uniqueNode = executionNode.next;
            while(uniqueNode && uniqueNode.next && uniqueNode.val == uniqueNode.next.val) {
                uniqueNode = uniqueNode.next;
            }
            executionNode.next = uniqueNode.next;
        } else {
            executionNode = executionNode.next
        }
    }
    
    return dummy.next;
};

// 解题思路
// 1. 建立新哨兵dummy，哨兵下个指针指向head
// 2. compare cur.val === cur.next.val ? cur = cur.next.next : cur = cur.next
// 3. return dummy.next 因为我们第一步把.next 指向head