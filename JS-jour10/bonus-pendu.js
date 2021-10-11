// BONUS - JEU DU PENDU

var prompt = require('prompt')

var getWord = require("./getWord")

var mysteryWord = getWord(8)

var attempts = 10

prompt.start()


// function play() {
//     prompt.get({ name: "input", description: `Trouver le mot mystère ${mysteryWord` }, function(err, result) {
//       if (attempts === 0) {
//         console.log("T'es nul")
//       }
  
//       if (result.input === mysteryWord) {
//         console.log("Bravo")
//       }
  
//       var str = ""
  
//       if (result.input.length !== 5) {
//         console.log("Pas le bon nombre de lettres")
//         play()
//       } else {
//         for (var i = 0; i < mysteryWord.length; i++) {
//           var letter = result.input[i]
  
//           if (mysteryWord[i] === letter) {
//             str = str + letter.red
//           } else if (mysteryWord.includes(letter)) {
//             str = str + letter.yellow
//           } else {
//             str = str + letter
//           }
//         }
  
//         play()
//       }
  
//       attempts = attempts - 1
  
//       console.log(str)
//     })
//   }
  
//   play()


var MAX_TENTATIVES = 10;
var mauvaisesLettres = [ ]; // sera complété pendant le jeu
var lettresAttendues = [ 's', 'u', 'p', 'e', 'r' ];

for (; mauvaisesLettres.length < MAX_TENTATIVES && lettresAttendues.length > 0; ) {
  console.log('lettres à trouver:', lettresAttendues);
  alert('Lettres à trouver: ' + lettresAttendues.length + '. '
    + 'Tentatives restantes: ' + (MAX_TENTATIVES - mauvaisesLettres.length));
  
    var lettre = prompt('Devinez une lettre');
    var indice = lettresAttendues.indexOf(lettre);
 
  if (indice != -1) {
    lettresAttendues.splice(indice, 1); // retire la 1ère occurrence de cette lettre trouvée dans le tableau
    alert('Bonne pioche! Continuez!');
  } else {
    mauvaisesLettres.push(lettre);
    alert('Le mot à trouver ne contient pas la lettre ' + lettre + ', désolé...');
  }
}

if (lettresAttendues.length == 0) {
  alert('Bravo, vous avez trouvé le mot !');
} else if (mauvaisesLettres.length == MAX_TENTATIVES) {
  alert('Perdu... Faites une autre partie !');
}