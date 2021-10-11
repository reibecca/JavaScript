// EXERCICES JS JOURS 9 - DEBUG, DATE, REGEX


// BONUS 

var moment = require("moment")

var language = moment.locale("fr")
console.log(language)

// BONUS VERSION EXO 1
var day = moment().format('dddd')
console.log(`Aujourd'hui, nous sommes ${day}`)


// BONUS VERSION EXO 2
var month = moment().format("MMMM");
console.log(`Le mois est ${month}`)


// BONUS VERSION EXO 3
var dateOfToday = moment().format('L')
console.log(`La date d'aujourd'hui est ${dateOfToday}`)


// BONUS VERSION EXO 4 

// Cette technique ne fonctionne pas, car elle donne une date approximative
var birthDate = moment("19970826", "YYYYMMDD").fromNow(true)
console.log(birthDate)

// Solution à l'exercice
function calculateAge(str){
    var age = moment().diff(moment(str), "years")
    console.log(moment.duration(age, "years").humanize())
}

calculateAge("1980-12-01")