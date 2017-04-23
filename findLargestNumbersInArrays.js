function largestOfFour(arr) {
/*
    use a for loop to iterate through the outer array
    then use a second for loop to run through the inner array
    set an array up to compare the arr arrays numbers to and add to
*/

var largestNumbers = [0,0,0,0];

//loop for outer array

  for (var outerArray = 0; outerArray < arr.length; outerArray++){

// loop for inner array
    for (var innerArray = 0; innerArray < arr[outerArray].length; innerArray++){

/*
    conditional statement - if the current loop of the array is greater than
    the number in largestNumbers array then largestNumbers changes to that value
*/
      if (arr[outerArray][innerArray] > largestNumbers[outerArray]){
        largestNumbers[outerArray] = arr[outerArray][innerArray];
    }
  }
}
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
