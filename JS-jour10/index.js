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
        return;
    }
})



// EXERCICE 02 - MAP DOUBLE 

var array = [1, 2, 3, 4, 5]

var double = array.map(function(number){
    return number * 2
})

console.log(double)



// Exercice 03 - MAP NAMES

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
    return {name: fullName.firstName + fullName.lastName}
})

console.log(shortNames)
 