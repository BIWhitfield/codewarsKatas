// NOT Finished - Head blag

var decodeMorse = function(morseCode){
var morseTable = [
{A:".-" }, {B:"-..."} , {C:"-.-."} , {D:"-.."} , {E:"."} , {F:"..-."} ,
{G:"--."} , {H:"...."} , {I:".."} , {J:".---"} , {K:"-.-"} , {L:".-.."} ,
{M:"--"} , {N:"-."} , {O:"---"} , {P:".--."} , {Q:"--.-"} , {R:".-."} ,
{S:"..."} , {T:"-"} , {U:"..-"} , {V:"...-"} , {W:".--"} , {X:"-..-"} ,
{Y:"-.--"} , {Z:"--.."}
]



var letters = morseCode.replace(/   /g, ' ').split(" ");
console.log(letters);

for (var i=0; i<letters.length; i++){
var decoded = morseTable.map(function(val)){
    var temp = [];
    temp.push(val.letters[i]);
      return temp;
}
}decoded.join(" ";)
}


// working solution

decodeMorse = function(morseCode){

var str = arguments[0];
str = str.trim();

var arr = str.split("  ");

for(var j = 0; j < arr.length; j++){
    arr[j] = arr[j].split(" ");
}

for (var k = 0; k < arr.length; k++){
    for(var i=0; i < arr[k].length; i++){
        arr[k][i] = MORSE_CODE[arr[k][i]];
}
}

for(var l = 0; l < arr.length; l++){
arr[l] = arr[l].join("");
}
return arr.join(" ");
}
