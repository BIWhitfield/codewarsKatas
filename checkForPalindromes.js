function palindrome(str) {
  var replace = /[^a-z0-9]/g;
  var pureString = str.toLowerCase().replace(replace, '');
  var reverseStr = pureString.split("").reverse().join("");

  if (pureString === reverseStr){
    return true;
  } else {
    return false;
  }

}



palindrome("eye");
