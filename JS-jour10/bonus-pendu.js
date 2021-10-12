// BONUS - JEU DU PENDU

var prompt = require('prompt')

var mysteryWord = ""
console.log(mysteryWord)
var guesses = []
var solution = ""

prompt.start()

var attempts = 10


function play() {
    prompt.get({ name: "input", description: "Donnez une lettre"}, function(err, result) {
        attempts = attempts + 1
        guesses.push(result.input)

        if (attempts === 10) {
            console.log("Trop de tentatives loser :)")
        }

        solution = mysteryWord.split("").map(function(letter){
            if (guesses.includes(letter)) {
                return letter
            } else {
                return "_"
            }
        })

        play()
    })

    console.log(guesses)
    console.log(solution)

    if (solution.join("") === mysteryWord) {
        console.log("J'ai gagné")
    }
}

play()

