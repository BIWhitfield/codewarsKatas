/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic
character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) {

  var cipherNumbers = [];
  var decoded = [];

  for (var i=0; i<str.length; i++){
       var numbers = str.charCodeAt([i]);
        cipherNumbers.push(numbers);
     }
  //rotate numbers A->M by plus 13
  for (var y=0; y<cipherNumbers.length; y++)
       if (cipherNumbers[y] >64 && cipherNumbers[y] < 78){
         var plusNum = cipherNumbers[y] + 13;
         decoded.push(plusNum);
     }
    //rotate numbers N->Z by minus 13
  else if (cipherNumbers[y] >77 && cipherNumbers[y] < 91){
         var minusNum = cipherNumbers[y] - 13;
         decoded.push(minusNum);
     }
    //insert punctuation and spaces "as is"
  else if (cipherNumbers[y] === 32 || 33 || 46 || 63){
         var spaceChar = cipherNumbers[y];
         decoded.push(spaceChar);
     }
    //convert array to new string
      var newString = String.fromCharCode.apply(null, decoded);

  return newString;

}


rot13("SERR PBQR PNZC");
