// ----- REVISIONS COURS JAVA SCRIPT -----


// 01 - ALPHABET 

// Créer une fonction sortLetters qui reçoit une string en paramètre
// La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"

function sortLetters(str) {
    var wordArray = str.split(""); // splits the string
    word = wordArray.sort().join(""); // sort the array and joins to form a string
    return word; // returns the result
  }
  console.log("taking konexio as a string");
  console.log(sortLetters("konexio"));
  sortLetters("konexio")

//////////////
console.log("")
console.log("")
//////////////



// 02 - XOXO

// Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach (str){
    var xNumber = 0
    var oNumber = 0

    for (i = 0; i < str.length; i++){
        console.log(str.charAt(i))

        if (str.charAt(i) === "x"){ // str[i] === "x"
            xNumber += 1
        }

        if (str.charAt(i) === "o"){ // str[i] === "o"
            oNumber += 1
        }

     }

    if (xNumber === oNumber){
        console.log(true)
         } else {
        console.log(false)
    }
 }
countEach("xxxoooox")
countEach("xox")


//////////////
console.log("")
console.log("")
//////////////



// 03 - PALINDROME

// Créez une fonction `checkPal` qui reçoit une string en paramètre
// La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

 function checkPal (str){
    var mot = 0
    var reverseMot = 0

    for (i = 0; i < str.length; i++){
        console.log(str.charAt(i))
    }
}

// if (mot === reverseMot){
//     console.log("Palindrome !")
// } else {
//     console.log("Nope")
// }

checkPal("racecar")

// function Palindrome(entree)
// {
//     var entree = prompt("racecar").toLowerCase();
//     var entree_1 = [...entree].reverse().join('');
// }
// Palindrome();

// var entree = prompt("racecar").toLowerCase();
// var entree_1 = [...entree].reverse().join('');

// if (entree === "") {
//     console.log('racecar');
// }

// else if (entree === entree_1) {
//     console.log(entree + ' est un palindrome');
// }

// else {
//     console.log(entree + ' n\'est pas un palindrome');
// }




//////////////
console.log("")
console.log("")
//////////////



// 04 - SWAP

// Créez une fonction `swap` qui reçoit une string en paramètre
// La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

// function swap (str)




//////////////
console.log("")
console.log("")
//////////////




// BONUS 1

// Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
// La fonction retourne une string avec le même texte en alternant majuscule / minuscule
// Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat



//////////////
console.log("")
console.log("")
//////////////




// BONUS 2

// Tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
// Si non corrigez le !

// function sortLetters(str) {
//     var wordArray = str.split(""); // splits the string
//     word = wordArray.sort().join(""); // sort the array and joins to form a string
//     return word; // returns the result
//   }
  
//   console.log(sortLetters("AsumaSensei"));

  // résultat = ASaeeimnssu ---> la fonction de mon exo 1 ne fonctionne pas avec des lettres majuscules

//////////////
console.log("")
console.log("")
//////////////




// BONUS 3

// Que retourne votre fonction de l'exercice 2 si vous lui passez autre chose que des x ou des o ? ou des X et O majuscules ?
// Rajoutez un message d'erreur explicite dans le premier cas et comptez les majuscules dans le second.



//////////////
console.log("")
console.log("")
//////////////




// BONUS 4

// Entrainez vous tout seul, il existe de nombreux site avec des exercices pour progressez en JS
// Si vous êtes plutôt joueur regardez [https://www.codingame.com/](https://www.codingame.com/)
// Si vous êtes plutôt progression pure et dure, lancez vous dans [https://www.codewars.com/](https://www.codewars.com/)
// Dans les deux cas, parlez en à votre formatteur pour plus de conseil !


//////////////
console.log("")
console.log("")
//////////////