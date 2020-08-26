**Four Steps**

- clarification
- possible solution ---> optimal (time & space)
- code
- test cases

**ROI**

- two pointers, DFS, BFS, binary search (highest ROI)
- linked list, stack, queue (high ROI)
- priority queue, heap (medium ROI)
- greedy, dynamic programming (medium ROI)
- trie, union find (medium ROI)

**DFS**

- 两种写法: 递归或者 stack

```python
  # 递归写法
  visited = set()

  def dfs(node, visited):
    visited.add(node)

    # process current node here
    for next_node in node.children():
      if not next_node in visited:
        dfs(next_node, visited)
```

```python
  # 非递归写法
  def dfs(self, tree):
    if tree.root is None:
      return []

    visited, stack = [], [tree.root]

    while stack:
      node = stack.pop()
      visited.add(node)

      process(node)
      nodes = generate_related_nodes(node)
      stack.push(nodes)
```

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

- 一种写法：queue
- required one array to store the sequence and one queue to record current node

```python
  def bfs(graph, start, end):
    queue = []
    queue.append([start])
    visited.add(start)

    while queue:
      node = queue.pop()
      visited.add(node)

      process(node)
      nodes = generate_related_nodes(node)
      queue.push(nodes)
```

**Divide Conquer**

- terminator
- process current logic(split big problem)
- drill down (subproblem), merge(subresult)
- reverse states

**Binary Search**

```python
left, right = 0, len(array) - 1
while left <= right:
  mid = (left + right) / 2
  if(array[mid] === target):
    # find the target!!
    break or return result
  elif array[mid] < target:
    left = mid + 1
  else
    right = mid - 1
```

**Floodfill**
