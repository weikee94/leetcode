/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head;
    var fast = head;

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            slow = head;
            while(slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};
// @lc code=end
// 解题思路
// 1. 先用快慢指针确认会不会形成环
// 2. 这步是重点：当快跟慢相遇 把慢指针指向头，然后快慢都只想前一步直到相遇就是了
