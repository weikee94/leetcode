/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }
  let returnPop = this.stack2.pop();

  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }
  return returnPop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }

  let returnPop = this.stack2.pop();
  this.stack2.push(returnPop);

  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop());
  }

  return returnPop;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stack1.length === 0 && this.stack2.length === 0) {
    return true;
  }
  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

// 解法
// 1. using two stack to simulate queue operations
