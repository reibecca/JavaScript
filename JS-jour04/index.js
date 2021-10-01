// JOUR 4 - EXERCICES SUR LES FONTIONS ET LES OBJETS

// 01 - OBJECT

var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}

console.log(cat)

console.log(cat["age"])

if (cat.isCute = true){
    console.log("So cute !")
}



// 02 - COMBINE

var cat2 = {
    name : "Luffy",
    age : 2,
    isCute : false
}

var cats = [cat, cat2]

console.log(cat.age)
console.log(cat["age"])

console.log(cat2.isCute)
console.log(cat2["isCute"])

console.log("")
console.log("")



// 03 - EVEN

function checkIfEven (num){
    if (num % 2 === 0){
        console.log("even")
    }
    else if (num % 2 !== 0){
        console.log("odd")
    }
}

checkIfEven(14)
console.log(checkIfEven)

console.log("")
console.log("")



// 04 - COMPARE 

function compare (num1, num2){
    if (num1 > num2){
        console.log(`${num1} is bigger`)
    }
    else if (num2 > num1){
        console.log(`${num2} is bigger`)
    }
    else if (num1 === num2){
        console.log("both are the same")
    }
}

compare(118, 74)
console.log(compare)



// 05 - ADD UP

function addUp (num){
    var resultat = 0
    for (var i = 0; i <= num; i++){
        resultat += i
    }
    console.log(resultat)
}

addUp(12)

console.log("")
console.log("")



// 06 - TIME

function format (num){
    var restHours = num % 3600
    var hours = (num - restHours) / 3600
    console.log(hours)

    var restMinutes = restHours % 60
    var minutes = (restHours - restMinutes) / 60
    console.log(minutes)

    var seconds = restMinutes
    console.log(seconds)

    return `${hours} : ${minutes} : ${seconds}`
}
var result = format(3700)
console.log(result)



// BONUS 1

var min = 6
var max = 15

function generatePassword (num){
    for(i = 0; i === num.lenght; i++){
        var random = Math.floor(Math.random() * (max - min + 1) + min)
    }

    if (random < 6 || random > 15){
        console.log("error")
    }
} 
num(8)
console.log(num.toUpperCase())



// BONUS 2

var min = 1
var max = 6
var somme = 0

function launchDice (numberOfDice){
    for (let i = 0; i === numberOfDice; i++) {
        var random2 = Math.floor(Math.random2() * (max - min + 1) + min)
        var somme = somme += i
    }
    return `somme des dés = ${somme}`
}
numberOfDice(1)
console.log(numberOfDice)
