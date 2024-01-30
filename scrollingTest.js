// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]


// Solution

function scrollingText(text){
    const upperText = text.toUpperCase();
      const rotations = [];
  
      for (let i = 0; i < text.length; i++) {
          const rotatedText = upperText.slice(i) + upperText.slice(0, i);
          rotations.push(rotatedText);
      }
  
      return rotations;
  }