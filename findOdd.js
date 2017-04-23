function findOdd(A, n) {
function getNumberCount(){
  return A.reduce(function(prev,next){
    prev[next] = (prev[next] +1) || 1;
     return prev;
  },{});
}

var n = getNumberCount();
var result = 0;

for (var i in n){
      if (n[i] % 2 !== 0){
        result = parseInt([i]);
  }
 } return result;
}

/*
Description:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
