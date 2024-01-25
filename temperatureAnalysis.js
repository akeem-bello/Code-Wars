// You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.


// Solution

function lowestTemp(t) {
    if(!t){
      return null
    }else{
     return Math.min(...t.split(' '))
    }
  }