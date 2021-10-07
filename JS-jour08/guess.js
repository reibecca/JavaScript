// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 04 - GUESS THE NUMBER

//-- Installez et importez le package prompt (n'oubliez pas d'initialiser !) et lancez les méthodes de prompt
var prompt = require("prompt")

prompt.start()


//-- Créez une variable mysteryNum contenant une valeur aléatoire (un nombre entier entre 1 et 100)
var min = 1
var max = 100
var mysteryNum = Math.floor(Math.random() * (max - min + 1) + min)


//-- Créez une fonction play qui demande au joueur "Quel est le nombre mystère ?"
function play(){
    prompt.get({ name: "play", description: "Quel est le nombre mystère" }, function(err, res){
        var myNumber = parseInt(res.play)

        if (typeof myNumber !== "number"){
            console.log("Error")                // si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction play
            play()
        } else if (myNumber < mysteryNum){
            console.log("C'est plus")           // si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction play
            play()
        } else if (myNumber > mysteryNum){
            console.log("C'est moin")           // si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction play
        } else if (myNumber === mysteryNum){
            console.log("Bravo !!");           // si le joueur donne le bon nombre, on affiche "Bravo !!"
        }
    })
}
// Appelez la fonction
play()