// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 


// Solution

function minSum(arr) {
    arr.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        sum += arr[i] * arr[j];
    }

    return sum;
}
