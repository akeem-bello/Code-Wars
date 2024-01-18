// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// Solution

function cubeOdd(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
              return undefined;
          }
  
          const cubedNum = Math.pow(arr[i], 3);
  
          if (cubedNum % 2 !== 0) {
              sum += cubedNum;
          }
      }
  
      return sum;
  }