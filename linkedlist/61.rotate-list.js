/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // terminator
    if(!head || !head.next || k == 0) {
        return head;
    }
    
    // find the length of list
    var lengthOfList = 1;
    var copyHead = head;
    while(copyHead.next !== null) {
        copyHead = copyHead.next;
        lengthOfList+=1;
    }
    
    // find the one to break the cyclic list
    var breakP = k % lengthOfList;
    
    // make it cyclic list
    copyHead.next = head;
    for(let i = lengthOfList - breakP; i > 1; i--) {
        head = head.next;
    }
    
    // set the start point
    copyHead = head.next;
    // cut the list by setting null
    head.next = null;
    
    return copyHead;
}

// 解题思路
// 1. 我们先让它成环
// 2. 然后找到需要把.next指成null的点,which is the one break the cyclic list

