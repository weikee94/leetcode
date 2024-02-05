/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
    var list = head;
    if(list === null) {
        return null;
    }
    while(list.next) {
        if(list.val === list.next.val) {
            list.next = list.next.next
        } else {
            list = list.next
        }
    }
    
    return head;
};
// @lc code=end

