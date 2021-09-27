// EXERCICES JOUR 1 JAVASCRIPT


// 01 - HELLO WORLD

console.log("Hello world !")


// 02 - STRING

var test = "My name is Legolas"

console.log(test)


// 03 - CONCATENATION

var firstName = "Legolas"

console.log("Nice to meet you " + firstName)


// 04 - STRING LENGTH

var testLength = "I'm very long !"

console.log(testLength.length)


// 05 - REPLACE

var food = "croissant is meh"

food = food.replace ("meh", "so good")

console.log(food)


// 06 UP AND DOWN

var basic = "This is Cool"

var basicUp = basic.toLocaleUpperCase()

var basicDown = basic.toLocaleLowerCase()

console.log(basic)
console.log(basicUp)
console.log(basicDown)


// 07 - SPLIT

var word = "banana"

var letters = word.split("")

console.log(letters)


// 08 - TEMPLATE

var age = 268

var template = (`I am ${age} years old`)

console.log(template)
