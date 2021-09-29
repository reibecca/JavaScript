// EXERCICES JS JOUR 3

// 01 - EXO 1

var fruits = ["mango", "lemon", "blueberry"]
console.table(fruits)


// 02 - ACCESS

var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[2])


// 03 - ADD AND REMOVE

var objetcs = ["pen", "book", "lamp"]
objetcs.unshift("chair")
console.log(objetcs)

objetcs.pop()
console.log(objetcs)

objetcs.push("laptop")
console.log(objetcs)

objetcs.shift()
console.log(objetcs)


// 04 - ORDER

var numbers = [4, 10, 8, 12, 6]
numbers.reverse()
console.log(numbers)

numbers.sort((a,b) => a - b)
console.log(numbers)


// 05 - BOUCLE

var total = 0
var limit = 10

for (var i = 0; i <= limit; i++) { 
  total +=i
  console.log(total) 
  }


// 06 - REVERSE 

var sentence = "Hello Konexio !"
//var reverseSentence = sentence.charAt(15)
//console.log(sentence.charAt(5))
var reverseSentence = ""

for (var i = sentence.length -1; i >= 0; i--){
  reverseSentence = reverseSentence + sentence[i]
  console.log(sentence[i])
}

console.log(reverseSentence)


// BONUS 1

for (var i = 0; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz")
  }
  // else if (i % 3 === 0 && i % 7 === 0){
    // console.log ("multiple7&3")
  //}
  else if (i % 3 === 0){
    console.log("fizz")
  }
  else if (i % 5 === 0){
    console.log("buzz")
  }
  else if (i % 7 === 0){
    console.log(" ")
  }
  else {
    console.log("variable i ", i)
  }
}


// BONUS 2

var total = 0
var limit = 10

var i = 0

while (i < limit){
  i++
  total += i
}
console.log(total)


// BONUS 3

var mates = ["Marco","Eloi","Jong","Hélène","Rébecca","Kevin JM","Kévin","Salwa","Hanaa","Ahmed","Alin","Jeremy","Vincent","Bilal","Edouard","Chaïma","Syrine","Séverin","Karimou","Evan"]