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

// 第二题
// Remove Duplicates
let arr = [2,3,3,3,6,9,9];
let nextNonDuplicate = 1;
for(let i = 1; i < arr.length; i++) {
	if(arr[nextNonDuplicate - 1] !== arr[i]) {
		arr[nextNonDuplicate] = arr[i];
		nextNonDuplicate++;
	}
}

console.log("nextNonDuplicate: ", nextNonDuplicate)

// Remove all instance with key
let arr = [3,2,3,6,3,10,9,3], key = 3
let notTargetNum = 0;
for(let i = 0; i < arr.length; i++) {
	if(arr[i] !== key) {
		notTargetNum++;
	}
}
console.log('notTargetNum: ', notTargetNum)

// 第三题
// Squaring a Sorted Array
let arr = [-2,-1,0,2,3]
let outputArr = [];
let left = 0;
let right = arr.length - 1;
let highestIndex = arr.length - 1;
while(left <= right) {
	let leftSquare = arr[left] * arr[left]
	let rightSquare = arr[right] * arr[right]
	if(leftSquare < rightSquare) {
		// 下面用unshift 或者用 highestIndex 都可以
		outputArr.unshift(rightSquare)
		// outputArr[highestIndex--] = rightSquare;
		right--;
	}else {
		outputArr.unshift(leftSquare);
		// outputArr[highestIndex--] = leftSquare;
		left++;
	}

}
console.log("result: ", outputArr)
