function iqTest(numbers){
//convert numbers from string to individual numbers
var indivNum = numbers.split(" ").map(function(item) {
    return parseInt(item, 10);
});
// create arrays to hold odd numbers or even numbers
var evenArray = [];
var oddArray = [];

/* loop through the individual numbers array - if divisible by 2 add to
    even array - if not divisible by 2 add to odd array
*/

for (var i=0; i<indivNum.length; i++){
 if (indivNum[i] % 2 === 0){
          evenArray.push(indivNum[i])
  }else if (indivNum[i] % 2 !== 0) {
          oddArray.push(indivNum[i])
  }
}
/* if the even array only has 1 number in it add a zero to the
start of the original array and return the indexOf original array using
the even Arrays only number. Add the 0 to original array so it will count from 0
but really count from position 1 - vice versa for odd
*/
if (evenArray.length === 1){
        indivNum.unshift(0);
      return indivNum.indexOf(evenArray[0]);
}else if (oddArray.length === 1){
        indivNum.unshift(0);
      return indivNum.indexOf(oddArray[0]);
  }
}

/*
Description:

Bob is preparing to pass IQ test. The most frequent task in this test is to
find out which one of the given numbers differs from the others. Bob observed
that one number usually differs from the others in evenness. Help Bob — to
check his answers, he needs a program that among the given numbers finds one
that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means
indexes of the elements start from 1 (not 0)
*/
