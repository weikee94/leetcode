/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    var empty = new ListNode()
    var [left, right] = split(head);
    var sorted = merge(empty, sortList(left), sortList(right));

    return sorted.next;
};

var split = function(node) {
    let slow = node;
    let fast = node;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 截断slow next 指针 to null
    let left = node;
    let right = slow.next;
    slow.next = null;

    return [left, right]
}


var merge = function(node, left, right) {
    var pointer = node;
    while(left || right) {
        if(!left) {
            pointer.next = right;
            right = right.next;
        }
        else if(!right) {
            pointer.next = left;
            left = left.next;
        }
        else {
            if(left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        // 这步第一次做没想到，必须指向下个指针才可以继续
        pointer = pointer.next;
    }
    return node;
}
// @lc code=end
// 解题思路
// 1 split two left and right
// 2 merge accordingly left and right by compare 

//   s = slow, f = fast, 每次慢走一步， 快走两步
//   当走到最后的时候， head -> s = left, s.next -> f = right
//   就这样分成两部分
//   s   s   s   s   s
//   1,  2,  3,  4,  5,  6,  7,  8,  9
//   f       f       f       f       f