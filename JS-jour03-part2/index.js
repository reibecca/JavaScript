// EXERCICES JS - ARRAY ET BOUCLES (part 2)


// EXERCICES 1 - NOMBRES PAIRS

var sommePair = 0

for (var i = 11; i < 47; i++){
    if (i%2 === 0){
        console.log(i)
        sommePair = sommePair + i
    } 
}
console.log(sommePair)
// résultat = 522



// EXERCICES 2 - NOMBRES IMPAIRS

var sommeImpair = 0

for (var i = 109; i < 588; i++){
    if (i%2 !== 0){
 // if (i % 2 == 0) continue    ------> autre solution pour afficher les nombres impairs
        console.log(i)
        sommeImpair = sommeImpair + i
    }
}
console.log(sommeImpair)
// résultat = 83520

console.log("")



// EXERCICES 3 - PUISSANCE ET RACINE CARREE

var numbers = [1, 2, 3, 4, 5]
var square = []
var roots = []

for (var i = 0; i < numbers.length; i++){
    var puissance = numbers[i] * numbers[i]
 // var puissance = numbers[i] ** 2 -----> autre manière d'écrire la variable puissance
    console.log(puissance)
    square.push(puissance)
}
console.log(square)
// résultat : [ 1, 4, 9, 16, 25 ]

for (var i = 0; i < square.length; i++){
    var racineCarré = Math.sqrt(square[i])
    console.log(racineCarré)
    roots.push(racineCarré)
}

console.log(racineCarré)
// résultat : [1, 2, 3, 4, 5]



// EXERCICE 4 - TABLE DE MULTIPLICATION V1

var tableDe3 = 3

for(var i=1; i <= 10; i++){
    var resultat= tableDe3*i
    console.log(`${tableDe3} x ${i} = ${resultat}`)
}



// EXERCICE 5 - TABLE DE MULTIPLICATION V2
var space = " "

for(var i=1; i <= 10; i++){
    for (var j=0; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i*j}`)
    }   
    console.log("")
}



// EXERCICE 6 - FACTORIELLE V1

var resultatSept = 7;

for(var i = 1; i < 7; i++){
    console.log(i)
    resultatSept *= i
}
console.log(`7! = ${resultatSept}`)



// EXERCICE 7 - FACTORIELLE V2

/////// Première technique (compliqué) :
// for(var i=8; i!==0; i--){
//     var resultat=1;
//     console.log(`Résultat factorielle de i = ${i}`);
//     for (var j=1;j<=i;j++){  
//         resultat *= j
//         console.log(`Résultat factorielle de i = ${j}`);     
//     }
//     console.log(`${i}! = ${resultat}`)
    
// }

for (var i = 0; i <= 8; i++){
    var resultat = 1

    for (var j = 1; j <= i; j++){
        resultat = resultat * j
    }
    console.log(`${i}! = ${resultat}`)
}



// EXERCICE 8 - SOMME DES CARRES

var sommeCarre = 0

for (var i = 5; i <= 10; i++){
    var carre = i*i
    console.log(carre)
    sommeCarre += carre
}
console.log(sommeCarre)
// résultat = 355



// EXERCICE 9 - COMPTONS

var multiple = 0

for (var i = 100; i < 1000; i++){
    if (i%7 === 0){
        console.log(i)
        // affichage de tous les multiples de 7 compris entre 100 et 1000
        multiple += 1
        // multiple ++ ou multiple = multiple + 1 ------> autre manière d'écrire
    } 
}
console.log(multiple)
// résultat = 128



// EXERCICE 10 - CHANCEUX 

var min = 1
var max = 6
var sum = 0

for (var i=0; i < 20; i++){
    var random = Math.floor(Math.random() * (max - min + 1) + min)

    if (random >= 5){
        console.log(random)
        sum = sum + random
    }
}

console.log(sum)



// EXERCICE 11 - DES BOITES

var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    // box1 = 5
    // box1 = 17
    console.log(box1 + box2);
    // box1 + box2 = 10
    // 17 + 17 = 34
    box2 = box1 + i;
    // 17 = 5 + 12
    // 30 = 17 + 13
}
console.log(box1);
console.log(box2);
console.log(i);
// i = 14 



// EXERCICE 12 - D'AUTRES BOITES

var box1 = 12;

for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    // = 12
    // = 24
    // = 39
    box1 = box1 + i;
    // 24 = 12 + 12
    // 33 = 24 + 9
    // 42 = 39 + 3
}

console.log(box1);
console.log(i);



// EXERCICE 13 - ENCORE DES BOITES

var box1 = 0;
var box2 = 3;

for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        // = 0
        // = -3
        box2++;
        // = 4
        // = 5
    } else {
        console.log(box2 + i);
        // = 3
        // = 2
        box1--;
        // = -1
        // = -2
    }
}

console.log(box1);
// = -2
console.log(box2);
// = 5
console.log(i);
// = -4