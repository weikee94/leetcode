/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 思考为什么要 finalLinkedList = dummy，而不直接使用 dummy 就好了
  let dummy = new ListNode("dummy");
  let finalLinkedList = dummy;
  let temp,
    carry = 0;

  while (l1 !== null || l2 !== null || carry) {
    let l1Val = l1 !== null ? l1.val : 0;
    let l2Val = l2 !== null ? l2.val : 0;
    let sum = l1Val + l2Val + carry;

    if (sum > 9) {
      temp = sum % 10;
      carry = 1;
    } else {
      temp = sum;
      carry = 0;
    }

    finalLinkedList.next = new ListNode(temp);
    finalLinkedList = finalLinkedList.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;

  // when add equal 10, add 1 to the next node
  // 7 + 5 = 12
};
// @lc code=end
