/*
A different way to write a function.
Worth remembering.

Also, note the ; following the functions closing brackets.
*/

var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6 ) + 1;
    alert(randomNumber);
};
alertRandom();