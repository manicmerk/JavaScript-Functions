function getRandomNumber( upper, lower ) {
    var randomNumber = Math.floor( Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
}

alert(getRandomNumber(100, 50));
/*
console.log(getRandomNumber(20));
var dieRoll = getRandomNumber();
*/

function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}

console.log(getArea(10, 10, 'sq in'));
/*
function max(one, two) {
  if(one > two) {
     return one;
     } else {
     return two; 
     }
}

alert("The larger number is " + max(5, 7));
*/