
// 第一题
// find the average of all contiguous subarrays of size K in it.
let outputArr = [];
let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
for(let i = 0; i <= arr.length - 5; i++) {
	let tempTotal = 0;
	for(let j = i; j < i + 5; j++) {
		tempTotal += arr[j];
	}
	outputArr.push(tempTotal/5);
}
console.log("outputArr: ", outputArr);

// method two sliding windows
let marker = 0;
let result = [];
let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 5;
let accumulateSum = 0;
for(let i = 0; i < arr.length; i++) {
	accumulateSum += arr[i];

	if(i >= k - 1) {
		result[marker] = accumulateSum / k;
		accumulateSum -= arr[marker];
		marker++;
	}

}
console.log("result: ", result);

// 第二题
// maximum sum subarray of size k
let currentMax = 0;
let accumulateSum = 0;
let marker = 0;
let arr = [2,3,4,1,5];
let k = 2;
for(let i = 0; i < arr.length; i++) {
	accumulateSum += arr[i];

	if(i >= k - 1) {
		if(accumulateSum > currentMax) {
			currentMax = accumulateSum;
		}
		accumulateSum -= arr[marker];
		marker++;
	}
}
console.log("currentMax: ", currentMax)

// 第三题
// smallest subarray with a given sum
let arr = [3,4,1,1,6], s = 8;
let accumulateSum = 0;
let marker = 0;
let min = arr.length;
let result = 0;
for(let i = 0; i < arr.length; i++) {
	accumulateSum += arr[i];
	// 重点在于这个题目的sliding window not fixed
	// so we will shrink the window until the window's sum is smaller than s again
	while(accumulateSum >= s) {
		min = Math.min(min, i + 1 - marker)
		accumulateSum -= arr[marker];
		marker++
	}
}

console.log("answer: ", min === arr.length ? 0 : min)

// 第四题
// longest substring with k distinct characters (leetcode 340)
let str = 'araaci', k = 1;
let map = {};
let marker = 0;
let left = '';
let longest = 0;
for(let i = 0; i < str.length; i++) {
	map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
	left = str[marker];
	while(Object.keys(map).length > k) {
		map[left] -= 1;
		if(map[left] === 0) {
			delete map[left]
		}
		marker++;
	}
	longest = Math.max(longest, i - marker + 1)
}
console.log("longest: ", longest)

// 第五题
// Fruits into Baskets
let arr = ['A', 'B', 'C', 'A', 'C'], k = 2;
let map = {};
let left = '';
let marker = 0;
let longest = 0;
for(let i = 0; i < arr.length; i++) {
	map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
	left = arr[marker];
	while(Object.keys(map).length > k) {
		map[left] -= 1;
		if(map[left] === 0) {
			delete map[left];
		}
		marker++;
	}
	longest = Math.max(longest, i - marker + 1)
}
console.log('longest: ', longest)


// 第六题
// no repeat substring
let s = 'aabccbb';
let map = {};
let longest = 0;
let marker = 0;
for(let i = 0; i < s.length; i++) {
	currentCharacters = s[i];
	if(map.hasOwnProperty(currentCharacters)) {
		map = {};
		marker = i
	}
	map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
	longest = Math.max(longest, i - marker + 1)
}
console.log("longest: ", longest)


// 第七题
// longest substring with same letters after replacement
let s = 'aabccbb', k = 2;
let maxRepeatCount = 0;
let marker = 0;
let longest = 0;
let map = {};
for(let i = 0; i < s.length; i++) {
	map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
	maxRepeatCount = Math.max(maxRepeatCount, map[s[i]]);

	if(i - marker + 1 - maxRepeatCount > k) {
		map[s[marker]] -= 1;
		marker++;
	}
	longest = Math.max(longest, i - marker + 1);
}
console.log('longest: ', longest)
































