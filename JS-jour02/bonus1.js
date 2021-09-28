// BONUS 1

var min = 1
var max = 6
var random = Math.floor (Math.random() * (max-min)) + min
console.log(random)

if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
}
