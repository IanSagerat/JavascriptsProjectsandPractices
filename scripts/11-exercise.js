const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);

function getLastValue(array){
    return array[array.length - 1];
}

console.log(getLastValue([1,2,3,4]));
console.log(getLastValue(['hi', 'hello', 'good']));

function swapArray(array){
    const lastIndex = array.length - 1;
    const firstIndex = array[0];

    array[0] = array[lastIndex];
    array[lastIndex] = firstIndex;

    return array;
}

console.log(swapArray([1,20,22,24,5]));
console.log(swapArray(['hi', 'hello', 'good']));

for(let i = 0; i <= 10; i+=2){
    console.log(i);
}

for(let i = 5; i >= 0; i--){
    console.log(i);
}

const arrays = [4,5,6];
for(let i = 0; i < arrays.length; i++){
    const result = arrays[i]+=1;
    console.log(result);
}

function addOne(array){
    for(let i = 0; i < array.length; i++){
        array[i]+=1;
    }
    return array;
}

console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));

function addNum(array, num){
    for(let i = 0; i < array.length; i++){
        array[i]+=num;
    }
    return array;
}

console.log(addNum([1,2,3], 2));
console.log(addNum([1,2,3], 3));
console.log(addNum([-2,-1,0,99], 2));

function addArrays(array1, array2){
    const result = [];
    for(let i = 0; i < array1.length; i++){
        result.push(array1[i] + array2[i]);
    }
    return result;
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));

function countPositive(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            count++;
        }
    }

    return count;
}
console.log(countPositive([-1,-2,-3,-4,5]));

function countNegative(nums){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            count++;
        }
    }
    return count;
}

console.log(countNegative([1,2,3,4,-4,5,-1,-2]));

function minMax(nums){

    let max = nums[0];
    let min = nums[0];

    if(nums.length === 0) return {max: null, min: null};

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
        if(nums[i] < min){
            min = nums[i];
        }
    }

    return {max, min};
}

console.log(minMax([1,2,3]));

function countWords(words){
    const result = {};

    for(let i = 0; i < words.length; i++){
        const word = words[i];

        if(result[word]){
            result[word] +=1
        } else {
            result[word] = 1
        }
    }

    return result;
}

console.log(countWords(["apple", "banana", "apple", "orange", "banana", "apple"]));