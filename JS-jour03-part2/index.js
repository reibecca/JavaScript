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
        console.log(i)
    }
    sommeImpair = sommeImpair + i
}
console.log(sommeImpair)


// EXERCICES 3 - PUISSANCE ET RACINE CARREE

var numbers = [1, 2, 3, 4, 5]
var square = []
var roots = []
