// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


// Answer
function position(letter){
    const input = letter.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterPosition = alphabet.indexOf(input) + 1;
    
    return `Position of alphabet: ${letterPosition}`;
  }


