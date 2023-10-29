// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// Answer

function findAverage(array) {
    let sum = 0;
    let average = 0;
    if(array.length == 0){
      return 0;
    }
      
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        average = sum / array.length;
      } 
    return average;
  }