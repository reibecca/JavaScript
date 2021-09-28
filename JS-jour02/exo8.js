// 08 - CONDITION III

var limit = 50
var score = 64

// if (score >= limit) {
//     console.log("Ok good !");
//     } else {
//         console.log("Oh nooo...")
//     }


var password = "azerty"

// if (password.length > 5){
//     console.log("The password is secure")
// } else{
//     console.log("The password is not secure")
// }


if ((score >= limit) && (password.length > 5)) {
    console.log("Everything is good")
} else if ((score >= limit) || (password.length > 5)) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// AUTRE SOLUTION

var validSscore = score >= limit
var securePassword = password.length > 5

if (validSscore && securePassword > 5) {
    console.log("Everything is good")
} else if (validSscore || securePassword > 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}