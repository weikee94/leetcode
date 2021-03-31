// method one 暴力解
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
