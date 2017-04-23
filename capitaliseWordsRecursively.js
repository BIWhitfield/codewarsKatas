/*
Modifying values in a simple array
Now that you've worked with functions that add elements to an array and
then manipulate those values, let's expand upon your newfound knowledge
with something slightly more practical.

A lot of times when programming you will encounter situations where a set
of data needs to be modified in a specific way.

In this situation, we have an array of names of capitals that are not written
correctly. What you need to do is finish the definition for a recursive
function that will take an array and capitalize each word within that
array using the capitalize() function provided.
*/

// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, i) {
  // Base case
  if (i === array.length) {
    return;
  }
  capitalize(array[i])
  array[i] = capitalize(array[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);
