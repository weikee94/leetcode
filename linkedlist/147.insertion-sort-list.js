/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function(head) {
    if(!head) {
        return head;
    }
    let newHead = new ListNode();
    let cur = head;
    let prev = newHead;
    
    while(cur) {
        let nextN = cur.next;

        while(prev.next && prev.next.val < cur.val) {
            // 这步一开始想不到！ 重点！
            // 这步是继续向下找更大值
            prev = prev.next
        }
     
        cur.next = prev.next; // cur.next 都是前一个传的next 
        prev.next = cur; // 因为下面会reset prev 所以我们每次加的时候是加在 0 之后
        prev = newHead; // reset head to 0
        cur = nextN; // 这步是move to next step
    }
    return newHead.next;
};
// @lc code=end

