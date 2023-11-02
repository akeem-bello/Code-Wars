// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// Answer

function mergeArrays(a, b) {
    const mergedArray = Array.from(new Set([...a, ...b]));
    mergedArray.sort((a, b) => a - b);
  
    return mergedArray;
  }