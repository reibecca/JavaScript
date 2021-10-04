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

function checkPal(str) {
    console.log(str)
    var palindrome = str.split("")
    console.log(palindrome)
    var palindrome1 = palindrome.reverse()
    console.log(palindrome1)
    var palindrome2 = palindrome1.join("")
    console.log(palindrome2)
  
    if (str === palindrome2) {
      return "palindrome"
    } else {
      return "No palindrome"
    }
}
  
var palindrome = checkPal("racecar")
console.log(palindrome)



//////////////
console.log("")
console.log("")
//////////////



// 04 - SWAP

// Créez une fonction `swap` qui reçoit une string en paramètre
// La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

function swap(str) {
    var result = ""
  
    for (var i = 0; i < str.length; i++) {
      var character = str[i]
  
      if (character === character.toUpperCase()) { // si character est une majuscule
        result = result + character.toLowerCase()
      } else {
        result = result + character.toUpperCase()
      }
    }
  
    console.log(result)
  }
  
  swap("Hello World")
 




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