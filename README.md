**Four Steps**
- clarification
- possible solution ---> optimal (time & space)
- code
- test cases



**DFS**

- required one array to store the sequence and one stack to record current node
- pseudocode:

```javascript
let res = [];
let stack = new Stack();
let node = root;
while (!stack.empty()) {
  node = stack.peek();
  res.push(node);
  stack.pop();
  if (node.right) {
    stack.push(node.right);
  }
  if (node.left) {
    stack.push(node.left);
  }
}
return res;
```

**BFS**

- required one array to store the sequence and one queue to record current node
