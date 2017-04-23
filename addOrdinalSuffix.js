function addOrdinalSuffix (num) {
  // if number ends in 1 add "st"
  // if number ends in 2 add "nd"
  // if number ends in 3 add "rd"
  // if number ends in 4, 5, 6, 7, 8, 9, or 0 add "th"
  // teen numbers end in "th"

// var a divides by 10 and leaves the remainder
// var b divides by 100 and leaves the remainder

    var a = num % 10,
        b = num % 100;

    if (a == 1 && b != 11) {
        return num + "st";
    }
    if (a == 2 && b != 12) {
        return num + "nd";
    }
    if (a == 3 && b != 13) {
        return num + "rd";
    }
    return num + "th";
}
