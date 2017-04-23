function abbreviate(string) {
// create arrays from string - remove non alphanumerics?
// split new string in to array
//set up abreviation array

 // var nonAlpha = string.replace(/\s+/g, " ");
   //   nonAlpha = string.replace(/[^a-zA-Z0-9+]/g, " ");
  var strArray = string.split(" ");
  var abvArray = [];

// loop through the array

for (var i = 0; i < strArray.length; i++){

// take a string and check if it is less than 4 letters - return the word to abvArray
  if (strArray[i].charAt(strArray.length() - 1) === "," && strArray[i].length -  < 4){
   abvArray.push(strArray[i]);

// if it is greater than 4 slice off first, last and middle letters in to variables
// add first and last letters to abv array with middle letters length as number

} else if (strArray[i].length >= 4){

      var firstLetter = strArray[i].slice(0, 1);
      var lastLetter = strArray[i].slice(-1);
      var middleChar = strArray[i].slice(1, -1);
      var number = middleChar.length;

  abvArray.push(firstLetter + number + lastLetter);

    } else if {
( && strArray[i].length >= 4)
var comma = strArray.slice(-1);
}
// join array together
  } return abvArray.join(" ");
}
