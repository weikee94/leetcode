**无毒神掌**

- 每个题刷五遍

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

**Dynamic Programming**

- 通常都是求最值问题
- 先定义子问题
- 将问题分解为相互重叠的子问题，通过反复求解子问题解决原问题

1. 最优子结构 opt[n] = best_of(opt[n-1], opt[n-2])
2. 储存中间状态: opt[i]
3. 递推公式(又叫状态转移方程或者 DP 方程)：Fib: opt[i] = opt[n-1] + opt[n-2]

解题步骤：
a. define subproblems
b. DP array
c. DP 方程

lbld
辨别问题：

1. 重叠子问题
2. 最优子结构
3. 状态转移方程

思路：

1. 确定 base case
2. 确定 `状态`, 也就是原问题和子问题中会变化的量
3. 确定 `选择`, 也就是导致 `状态` 产生变化的行为
4. 明确 dp 函数/数组的定义

**自底向下**

- 递归 + 记忆化搜索
  `例子`

```js
let cache = {};
var climbStairs = function (n) {
  // 递归 + 记忆化搜索：自底向下
  if (n <= 2) {
    return n;
  }
  if (!(n in cache)) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};
```

**自底向上**
`例子`

```js
var climbStairs = function (n) {
  if (n < 2) return 1;
  // 初始第零和第一台阶所需步数
  // 第零台阶设置为1 是为了求第二台阶时，使用 第零和第一 相加而来的

  // 这个就是所谓的自底向上 bottom up
  let dp = [1, 1];
  for (let i = 2; i <= n.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};
```

**字符串问题变化**

- 通常都是二维数组，且行和列为个别的字符串
