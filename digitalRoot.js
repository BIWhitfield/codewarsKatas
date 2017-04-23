function digital_root(n) {
while (n > 9){
var num = n.toString().split('').map(function(item) {
    return parseInt(item, 10);
});
n = num.reduce(function(sum, next) {
    return sum + next;
}, 0)
}return n;
}



/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has two digits,
continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7
*/

/*

old code

function digital_root(n) {

var num = n;

function arrayToString(){
     var num = num.toString().split("");}

for (var i=0; i<num.length; i++){
     num[i] = parseInt(num[i], 10);
}

var sumArray = num.reduce(function(sum, next) {
    return sum + next;
}, 0)

if (sumArray > 9){
  arrayToString(sumArray);
}
else return sumArray;
}
}
}
*/
