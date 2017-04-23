function persistence(n) {
var count = 0;
while (n > 9){
count += 1;
var num = n.toString().split('').map(function(item) {
    return parseInt(item, 10);
});
n = num.reduce(function(sum, next) {
    return sum * next;
})

}return count;
}

/*
Description:

Write a function, persistence, that takes in a positive parameter num
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

*/
