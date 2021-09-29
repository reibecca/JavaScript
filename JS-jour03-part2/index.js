// EXERCICES JS - ARRAY ET BOUCLES (part 2)


// EXERCICES 1 - NOMBRES PAIRS

var sommePair = 0

for (var i = 11; i <= 47; i++){
    if (i%2 == 0){
        console.log(i)
    } 
    sommePair = sommePair + i
}
console.log(sommePair)


// EXERCICES 2 - NOMBRES IMPAIRS

var sommeImpair = 0

for (var i = 109; i <= 588; i++){
    if (i%2 != 0){
 // if (i % 2 == 0) continue    ------> autre solution pour afficher les nombres impairs
        console.log(i)
    }
    sommeImpair = sommeImpair + i
}
console.log(sommeImpair)

console.log("")


// EXERCICES 3 - PUISSANCE ET RACINE CARREE

var numbers = [1, 2, 3, 4, 5]
var square = []
var roots = []

for (i = 0; i < numbers.length; i++){
    var puissance = numbers[i] * numbers[i]
    console.log(puissance)
    square.push(puissance)
}

for (i = 0; i < square.length; i++){
    var racineCarré = Math.sqrt(square[i])
    console.log(racineCarré)
    roots.push(racineCarré)
}


// EXERCICE 4 - TABLE DE MULTIPLICATION V1

var tableDe3 = 3
for(var i=1; i <= 10; i++){
    var resultat= tableDe3*i
    console.log(tableDe3+ "x" + i+ "=" + resultat);}


// EXERCICE 5 - TABLE DE MULTIPLICATION V2
var space = " "

for(var i=1; i <= 10; i++){
    for (var j=0; j <= 10; j++) {
    console.log(i, 'x', j, '=', i * j)}   
    // console.log(`${i} x ${j} = ${i*j}`)}  --------> autre manière d'écrire le console.log
    }


// EXERCICE 6 - FACTORIELLE V1

var resultatSept = 7;

for(var i = 6; i !==0; i--){
    console.log(`${i}`);
    resultatSept *= i ;
}
console.log(`7! = ${resultatSept}`);


// EXERCICE 7 - FACTORIELLE V2

for(var i=8; i!==0; i--){
    var resultat=1;
    //console.log(`i = ${i}`);
    for (var j=1;j<=i;j++){  
        resultat*=j;
        //console.log(`j = ${j}`);     
    }
    console.log(`${i}! = ${resultat}`);
    
}