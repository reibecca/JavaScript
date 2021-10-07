// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 02 - TABLE DE MULTIPLICATION

//-- Créez une fonction multiply qui recevra un paramètre (un nombre entier)

function multiply (number){
    for(var i=1; i <= 10; i++){
        var resultat = number * i
        console.log(`${number} x ${i} = ${resultat}`)
    }
}

//-- Créez une fonction multiply qui recevra un paramètre (un nombre entier)

// multiply(10) ---- > affiche la table de 10 dans le terminal


//-- Vous devrez donner l'argument dans le terminal en appelant le programme

// console.log(argv)
var parameters = process.argv.slice(2)
var parameter = parseInt(parameters)


// Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
if (parameters.lenght === 0){
    console.log("Error")
}else{
    multiply(parameter) // -----> affiche la table de n'importe quel argument dans le terminal avec Node
}


module.exports = (multiply)
