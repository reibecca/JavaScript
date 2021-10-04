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


console.log("")
console.log("")


// 02 - XOXO

// Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

function countEach (str){
    var xNumber = 0
    var yNumber = 0

    for (i = 0; i < str.length; i++){
        console.log(str)

        var xNumber = xNumber +=i
        var yNumber = yNumber +=i
    }

    if (xNumber === yNumber){
        console.log(true)
        } else {
        console.log(false)
    }
}
countEach("xxxoooox")
countEach("xox")


console.log("")
console.log("")



// 03 - PALINDROME

// Créez une fonction `checkPal` qui reçoit une string en paramètre
// La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

function checkPal (str){

    var = 
}