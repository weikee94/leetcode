
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

// 第八题
// longest subarray with Ones after Replacement
let a = [0,1,1,0,0,0,1,1,0,1,1], k = 2;
let maxRepeatCount = 0;
let marker = 0;
let longest = 0;
let map = {};
for(let i = 0; i < a.length; i++) {
	map[a[i]] = map[a[i]] ? map[a[i]] + 1 : 1;
	maxRepeatCount = Math.max(maxRepeatCount, map[a[i]]);

	if(i - marker + 1 - maxRepeatCount > k) {
		map[a[marker]] -= 1;
		marker++
	}
	longest = Math.max(longest, i - marker + 1)
}
console.log('longest: ', longest)


// 第九题
// Permutation in a String 
let s =  'bcdxabcdy', p = 'bcdyabcdx'
let patternMap = {};
for(let i = 0; i < p.length; i++) {
	patternMap[p[i]] = patternMap[p[i]] ? patternMap[p[i]] + 1 : 1;
}

let currentCharacters = '';
let matches = 0;
let marker = 0;
let leftMost = '';
let result = false;
for(let i = 0; i < s.length; i++) {
	let currentCharacters = s[i]
	if(patternMap.hasOwnProperty(currentCharacters)) {
		patternMap[currentCharacters] -= 1;
		if(patternMap[currentCharacters] === 0) {
			matches++;
		}
	}
	if(matches === Object.keys(patternMap).length) {
		result = true;
	}
	if(i >= p.length - 1) {
		leftMost = s[marker];
		marker++;
		if(patternMap.hasOwnProperty(leftMost)) {
			if(patternMap[leftMost] === 0) {
				matches--;
				patternMap[leftMost] += 1;
			}
		}
	}
}

// 第十题
// string anagrams
let s = 'abbcabc', p = 'abc';
let patternMap = {};

for(let i = 0; i < p.length; i++) {
	patternMap[p[i]] = patternMap[p[i]] ? patternMap[p[i]] + 1 : 1;
}

let outputArr = [];
let matches = 0;
let marker = 0;
let leftMost = '';
for(let i = 0; i < s.length; i++) {
	let currentCharacters = s[i]
	if(patternMap.hasOwnProperty(currentCharacters)) {
		patternMap[currentCharacters] -= 1;
		if(patternMap[currentCharacters] === 0) {
			matches++;
		}
	}
	if(matches === Object.keys(patternMap).length) {
		// 下面这步没想到，下次复习重点思考这里
		outputArr.push(marker)
	}
	if(i >= p.length - 1) {
		leftMost = s[marker];
		marker++;
		if(patternMap.hasOwnProperty(leftMost)) {
			if(patternMap[leftMost] === 0) {
				matches--;
				patternMap[leftMost] += 1;
			}
		}
	}
}
console.log('outputArr: ', outputArr)

// 第十一题
// smallest window containing substring

let s = 'aabdec', p = 'abc';
let patternMap = {};
for(let i = 0; i < p.length; i++) {
	patternMap[p[i]] = patternMap[p[i]] ? patternMap[p[i]] + 1 : 1
}
let marker = 0;
let currentChac = '';
let matched = 0;
let smallest = s.length + 1;
let leftMost = '';
let subStrStart = 0;
for(let i = 0; i < s.length; i++) {
	currentChac = s[i]
	if(patternMap.hasOwnProperty(currentChac)) {
		patternMap[currentChac] -= 1;
		if(patternMap[currentChac] >= 0) {
			// 这里确保加进来的字母一定是对的，如果是 bbb patternMap 返回是负的， matched 就加不了
			matched++;
		}
	}

	while(matched === p.length) {
		// 这里下次复习想看为什么是 i - marker + 1 [重点复习]
		if(smallest > i - marker + 1) {
			smallest = i - marker + 1;
			subStrStart = marker;
		}

		leftMost = s[marker++];
		if(patternMap.hasOwnProperty(leftMost)) {
			if(patternMap[leftMost] === 0) {
				matched--;
			}
			patternMap[leftMost] += 1;
		}
	}
}
console.log("smallest: ", smallest > s.length ? '' : s.substring(subStrStart, subStrStart + smallest))


// 第十二题
// Words Concatenation
let s = 'catfoxcat', words = ['cat', 'fox'];
let frequencyMap = {}
for(let i = 0; i < words.length; i++) {
	frequencyMap[words[i]] = frequencyMap[words[i]] ? frequencyMap[words[i]] + 1 : 1;
}
let startIndex = 0;
let result = [];
let wordCount = words.length;
let wordLength = words[0].length;
for(let i = 0; i <= s.length - wordCount * wordLength ; i++) {
	let wordSeen = {};
	for(let j = 0; j < wordCount; j++) {
		// 下面这步是重点，以nextWordIndex 为分割，找到下一个字的起始点，用substring 截取
		let nextWordIndex = i + j * wordLength;
		let currentWord = s.substring(nextWordIndex, nextWordIndex + wordLength);
		if(!frequencyMap.hasOwnProperty(currentWord)) {
			break;
		}

		wordSeen[currentWord] = wordSeen[currentWord] ? wordSeen[currentWord] + 1 : 1;

		if(wordSeen[currentWord] > frequencyMap[currentWord]) {
			break;
		}

		// 这步一开始想不到 [复习重点]
		if(j + 1 == wordCount) {
			result.push(i)
		}
	}
}
console.log('result: ', result)
