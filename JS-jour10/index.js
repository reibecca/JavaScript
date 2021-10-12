// EXERCICE JOUR 10 - FILE SYSTEM, MAP, FILTER, REDUCE


// EXERCICE 01 - FILE SYSTEM

var fs = require("fs")



//-- Lecture du fichier
fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("Lecture du contenu de jour07.txt : " + data.toString());
})



 //-- Modifier le contenu du fichier et l'afficher
 fs.writeFile("jour07.txt", "Nom et contact des agents",  function(err) {
    if (err) {
       return console.error(err);
    }
 
    // console.log("Et voilà ! Voyons le résultat :");
 
    fs.readFile("jour07.txt", function (err, data) {
       if (err) {
          return console.error(err);
       }
 
       console.log("Lecture du nouveau contenu de jour07.txt : " + data.toString());
    });
 });



 //-- Supprimer le fichier 
fs.unlink("jour07.txt", function (err, data){
    if (err) {
        console.error(err);
    }
})

console.log("")



// EXERCICE 02 - MAP DOUBLE 

var array = [1, 2, 3, 4, 5]

var double = array.map(function(number){
    return number * 2
})

console.log(double)


console.log("")



// Exercice 03 - MAP NAMES

//-- On créee un tableau de deux objets
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

console.log(longNames)

var shortNames = longNames.map(function(fullName){
    return {name: `${fullName.firstName}  ${fullName.lastName}`}
})

console.log(shortNames)


console.log("")



// EXERCICE 04 - FILTER NUMBERS 

var array = [1, "toto", 34, "javascript", 8]

var numbers = array.filter(function(number){

    // return parseInt(number) === number ---> fonctionne mais pas assez clean comme solution
    return typeof number === "number"  // ---> meilleure solution car donne le type de l'élément
})

console.log(numbers)


console.log("")



// EXERCICE 05 - FILTER EVEN

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(evenNum){
    return evenNum % 2 === 0
})

console.log(even)


console.log("")



// EXERCICE 06 - CAKES

//-- cette variable est un tableau un tableau d'objets
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]


var chocolateCakes = cakes.filter(function(choco){
    return choco.flavor === "chocolate"
})
var soldOutCakes = chocolateCakes.map(function(soldOut){
    return soldOut.status = "sold out !" //----> problème : modifie la valeur du tableau initial
})

console.log(chocolateCakes)


console.log("")



// BONUS - JEU DU PENDU