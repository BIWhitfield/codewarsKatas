/*
Unpacking the stack, Part 2
The next step is to use the array of numbers in stack as the data for our
function multiplyEach().

This function will iterate through each element in the array stack,
remove it from the stack using pop(), and multiply it by the next element
in the array. pop() just removes the last element in an array and returns
its value.

In this way we are effectively mimicking the logic of factorial() -
taking an integer and multiplying it by each integer between itself and one.

*/

var stack = [];

function countDown(int) {
  stack.push(int);
  if (int === 1) {
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack
  // and assign it to the variable int
  int = stack.pop();
  x = stack.length;
  // Base case
  if (x === 0) {
    return 1;
  }
  // Recursive case
  else {
	stack[x - 1] = int * stack[x - 1];
	multiplyEach();
    return int;
  }
}

// Call the function countDown(7)
countDown(7);
// And then print out the value returned by multiplyEach()
console.log(multiplyEach());
