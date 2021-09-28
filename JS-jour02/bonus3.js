// BONUS 3

var roundedNumber = 3.6

if (roundedNumber - 0.4 <= Math.floor(roundedNumber)) {
    console.log(Math.floor(roundedNumber))
} else {
    console.log(Math.ceil(roundedNumber))
}


// Autre solution

var roundedNumber = 3.6
var mathFloor = Math.floor(roundedNumber)
var mathCeil = Math.ceil(roundedNumber)
var result = mathCeil - roundedNumber

if (result <= 0.5) {
    console.log(mathCeil)
} else {
    console.log(mathFloor)
}