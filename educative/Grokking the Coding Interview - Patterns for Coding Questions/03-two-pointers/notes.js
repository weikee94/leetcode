// 第一题
// Pair with target sum 
let arr = [1,2,3,4,6], target = 6;
let left = 0;
let right = arr.length - 1;
let currentSum = 0;
let result = [];
while(left < right) {
	currentSum = arr[left] + arr[right]
	if(currentSum === target) {
		result.push(left);
		result.push(right);
		break;
	}

	if(currentSum > target) {
		right--;
	}

	if(currentSum < target) {
		left++;
	}
}
console.log('result: ', result)
