// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// Answer

function findOutlier (integers){
    let evenCount = 0;
    let oddCount = 0;
    let evenInt = 0;
    let oddInt = 0;

    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0){
            evenCount++;
            evenInt = integers[i];
        }else{
            oddCount++;
            oddInt = integers[i];
        }
    }

    if(evenCount > oddCount){
        return oddInt;
    }else{
        return evenInt;
    }
}