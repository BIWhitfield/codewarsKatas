/*
Modifying values in nested arrays

In this example, our array capitals now contains 5 nested arrays,
each of which has the names of capital cities from different continents.

When dealing with nested arrays in recursive functions, we have to use a
separate variable for the parent array and the nested array.

Instructions
Study the recursive function fixLetterCase() to see how it accomplishes the
same thing as before, but now with nested arrays. Once you have figured it
out, fill in the blanks.

Use the length method on array to complete both conditional statements.

For the conditional statement in the first recursive case, you will need
to call the length method on the current nested array. array[y] will
return the sub-array at index y of the main array.

*/

var capitals = [ ["berlin", "parIs", "MaDRiD"],
                 ["monTEvideo", "BrASiLia"],
                 ["dElhi", "toKYo", "BeiJing"],
                 ["CanBerra"],
                 ["kiGaLi", "pretoRIA"] ];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, x, y) {
  if (y === array.length) {
    return;
  }
  else if (x === array[y].length) {
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    array[y][x] = capitalize(array[y][x]);
    return fixLetterCase(array, x + 1, y);
  }
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);
