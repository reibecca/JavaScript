// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 02 - TABLE

//console.log(process.argv)

var args = process.argv.slice(2);

//console.log(parseInt(args[0])); 
//console.log(args)

function multiply (nbr){
    var tableDeX = nbr

    for(var i=1; i <= 10; i++){
        var resultat= tableDeX * i
        console.log(`${tableDeX} x ${i} = ${resultat}`)
    }
}
//multiply(10) ---- > affiche la table de 10 dans le terminal
multiply(parseInt(args[0])) // -----> affiche la table de n'importe quel argument dans le terminal avec Node


