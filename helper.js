function frequencyCounter(array) {
    return array.reduce(function(accelerator, next) {
        accelerator[next] = (accelerator[next] || 0) + 1;
        return accelerator;
    }, {});
}

function findMode(array) {
    let counter = frequencyCounter(array);

    let count = 0;
    let mode;

    for (let key in counter) {
        if (counter[key] > count) {
            mode = key;
            count = counter[key];
        }
    }
    return +mostFrequent;
}

function checkAndConvertNums(numToStr) {
    let result = [];

    for (let i=0; i < numToStr.length; i++) {
        let strToNum = Number(numToStr[i]);

        if (Number.isNaN(strToNum)) {
            return new Error(`Invalid input`);
        }
        result.push(strToNum);
    }
    return result;
}

function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function(accelerator,currNum){
        return accelerator + currNum;
    }) / nums.length
}

function findMedian(nums){

    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length/2);
    let median;

    if(nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1])/2;
    } else {
        median = nums[middleIndex];
    }
    return median;
}

module.exports = {
    frequencyCounter, findMean, findMedian, findMode, checkAndConvertNums
};