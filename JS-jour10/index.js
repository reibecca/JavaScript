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
 