// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]


// Solution
function findMissingNumbers(arr){
    const missingNumbers = [];
  
      for (let i = 0; i < arr.length - 1; i++) {
          const current = arr[i];
          const next = arr[i + 1];
  
          if (next - current > 1) {
              for (let j = current + 1; j < next; j++) {
                  missingNumbers.push(j);
              }
          }
      }
  
      return missingNumbers;
  }