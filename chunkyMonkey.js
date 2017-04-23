/*
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a
two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
 var finalArray = [];
 var i=0;
  while (arr.length > i) {
    finalArray.push(arr.slice(i, i+=size));

}
 return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
