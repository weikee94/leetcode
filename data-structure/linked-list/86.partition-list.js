/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var left = new ListNode();
    var right = new ListNode();
    var smallList = left;
    var bigList = right;
    
    
    if(!head || !head.next) {
        return head;
    }
    
    while(head) {
        if(head.val < x) {
            smallList.next = head;
            smallList = smallList.next;
        } else {
            bigList.next = head;
            bigList = bigList.next;
        }
        head = head.next
    }

    bigList.next = null;
    smallList.next = right.next;
    
    return left.next;
};

// 解题思路
// 1. 建两个表
// 2. 把最小一边， 最大一边
// 3. 然后合并