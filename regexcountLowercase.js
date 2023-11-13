// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26


// Answer

function lowercaseCount(str){
    const lowerCaseLetters = /[a-z]/g;
    const lowerCaseMatches = str.match(lowerCaseLetters);
    
    return lowerCaseMatches ? lowerCaseMatches.length : 0;
  }