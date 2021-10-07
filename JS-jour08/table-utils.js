// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 03 - SEPARATE TABLE

const multiply = require("./multiply")
// var multiply = require("./multiply")

var args = process.argv.slice(2);

function addition (nbrAdd){
    for(var i=1; i <= 10; i++){
        var resultat = nbrAdd + i
        console.log(`${nbrAdd} + ${i} = ${resultat}`)
    }
}
addition(parseInt(args[0]))

module.exports = {multiply, addition}