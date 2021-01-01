var maxDepth = function(root) {

    if(!root) return 0;
    let max = 0;

    var deepDown = function(node, depth) {
        if(!node.left && !node.right) {
            if(depth > max) {
                max = depth;
            }
        }
        if(node.left) {
            deepDown(node.left, depth + 1)
        }
        if(node.right) {
            deepDown(node.right, depth + 1)
        }
    }
    deepDown(root, 1)
    return max;
}

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

// balanced tree
var isBalanced = function(root) {

    if(root === null) {
        return true;
    }

    let flag = true;
    
    var deepDown = function(node) {
        let leftHeight = 0;
        let rightHeight = 0;
        let maxHeight = 0;
        if(node.left === null && node.right === null) {
            return 0;
        }

        if(node.left !== null) {
            leftHeight = 1 + deepDown(node.left)
        }

        if(node.right !== null) {
            rightHeight = 1 + deepDown(node.right)
        }

        maxHeight = Math.max(leftHeight, rightHeight);
        if(maxHeight - leftHeight > 1 || maxHeight - rightHeight > 1) {
            return flag = false;
        } 
    }

    deepDown(root)

    return flag;
}