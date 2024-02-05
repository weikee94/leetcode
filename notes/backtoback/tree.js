如何辨别symmetric tree?
- 把树翻转且对应每个值
- 下面就是错误的例子，必须是左子树2的左边是3才是正确
    1
  2   2
    3   3
- 每当做树的题目第一个想到是recursion 且先从最小做起,每个root都有l & r 的sub tree
  root
l      r
- 下面是正确的 symmetric tree
     1
  2    2
3  4  4  3 
- in order to ensure is a symmetric tree
 - 我们得出结果 root.left.val == root.right.val
 - leftSubtree.right.val == rightSubtree.left.val
 - leftSubtree.left.val == rigthSubtree.right.val
