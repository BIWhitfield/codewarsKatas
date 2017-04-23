/*The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"*/

function abbreviate(string) {
    return (string.split(" ").map((word)=>{
        if (word.length < 4) return word;
        if (word.indexOf('-') !== -1) {
            return word.split("-").map((sub_word)=>{
                if (sub_word.length < 4) return sub_word;
                return sub_word[0] + (sub_word.length - 2) + sub_word[sub_word.length - 1];
            }).join("-");
        }else{
            if (word[word.length - 1] == ',') {
                return word[0] + (word.length - 3) + word[word.length - 2] + word[word.length - 1];
            }else{
                return word[0] + (word.length - 2) + word[word.length - 1];
            }
        }
    })).join(" ");
