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
var birthDate = moment("19970826", "YYYYMMDD").fromNow()
console.log(birthDate)