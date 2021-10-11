var randomWordFR = require('random-word-fr');

function getWord(numberOfLetters) {
  var has8Letters = false
  var word = ""

  while (!has8Letters) {
    word = randomWordFR()
    has8Letters = word.length === numberOfLetters
  }

  word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return word
}

module.exports = getWord