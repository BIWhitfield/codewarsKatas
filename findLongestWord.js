
function findLongestWord(str) {
// Split sentence in to individual words
  var strSplit = str.split(' ');
  var longestWord = 0;

  for (var i=0; i < strSplit.length; i++){

    if (longestWord < strSplit[i].length){
      longestWord = strSplit[i].length;
  }
 }
 return longestWord;
}
