**记录下标位置置换**
_QS: 283_

```js
var moveZeroes = function (nums) {
  let j = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      let temp = nums[j];
      nums[j] = nums[index];
      nums[index] = temp;
      j++;
    }
  }
};

// es6 direct swap like python
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
};
```

**遍历数组 (必须熟炼)**
_QS: 11_

```js
// 嵌套循环的遍历
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {}
}

// 左右边界 i，j 向中间收炼，左右夹逼
for (let i = 0; j < nums.length - 1; i < j) {
  var minHeight = a[i] < a[j] ? a[i++] : a[j--];
}

// i 和 j 同时向左右扩散
```
