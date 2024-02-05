**LinkedList**

```js
// reverse linkelist
var reverseList = function(head) {
    let temp = null;
    let newHead = null;

    while(head !== null) {
        temp = head;
        head = head.next;
        temp.next = newHead;
        newHead = temp;
    }
    return newHead;
}

// check linked list cyclic
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast!== null && fast.next!== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
}
```