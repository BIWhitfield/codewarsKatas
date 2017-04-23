/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.
*/


function destroyer() {
  var arr = arguments[0];
  var params = [];

  // Create array of all elements to be removed
  for (var i = 1; i < arguments.length; i++)
    params.push(arguments[i]);

  // return all not matching values
  return arr.filter(function(item) {
    return params.indexOf(item) < 0;
  });
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
