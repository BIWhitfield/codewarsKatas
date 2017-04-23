function titleCase(str) {
  //make str all lower case and split in to an array
  str = str.toLowerCase().split(" ");

  /*loop through array make each first letter an uppercase letter using
   .charAt[0] - each loop of str make first letter uppercase and extract
   from index 1 of the end of the string
   eg: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
  */

    for (var i = 0; i < str.length; i++){
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }


  return str.join(" ");
}

titleCase("I'm a little tea pot");
