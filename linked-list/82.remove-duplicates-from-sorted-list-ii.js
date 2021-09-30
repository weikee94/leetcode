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


// 30/09/2021
var deleteDuplicates = function(head) {
    
    // handle edge case only one element
    if(head === null || head.next === null) {
        return head;
    }
    
    let dummy = new ListNode();
    dummy.next = head;
    
    let dummyPointer = dummy;
    let headPointer = head;
    
    while(headPointer && headPointer.next) {
        if(dummyPointer.next.val === headPointer.next.val) {
            // 找到相邻节点VAL相同的最后一个点
            // 然后dummyPointer 指向它的next
            while(headPointer.next && dummyPointer.next.val === headPointer.next.val) {
                headPointer = headPointer.next
            }
            
            // 删除相同值的点
            dummyPointer.next = headPointer.next;
            headPointer = headPointer.next;
            
        } else {
            // 如果不同则共同移一位
            dummyPointer = dummyPointer.next;
            headPointer = headPointer.next
        }
    }
    
    return dummy.next;  
};

// 思路 双指针
// 1 设置 dummy node 指向head 方便返回结果
// 2 做两个指针 分别指向dummy and head
// 3 然后依次对比dummy.next.val and head.next.val