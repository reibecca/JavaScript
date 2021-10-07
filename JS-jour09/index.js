// EXERCICES JS JOURS 9 - DEBUG, DATE, REGEX


// EXERCICE 01 - AUJOURD'HUI

var weekDays = ["dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

function whatDayIsToday (){

    var temps = new Date();
    var day = temps.getDay();
    console.log(day);

    console.log(weekDays[day])

    console.log(`Aujourd'hui nous sommes le ${weekDays[day]}`)
}
var today = whatDayIsToday()

console.log("")



// EXERCICE 02 - MOIS COURANT

var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobre", "November", "December"]

function whatMonthIsIt (){
    var temps = new Date();
    var month = temps.getMonth();
    console.log(month);

    console.log(monthOfYear[month])

    console.log(`Aujourd'hui nous sommes en ${monthOfYear[month]}`)
}
var ourMonth = whatMonthIsIt()

console.log("")



// EXERCICE 03 - FORMAT

function formatDate (aaaa, mm, jj){
    var temps = new Date()

    var jour = temps.getDay()
    console.log(jour)

    var mois = temps.getMonth()
    console.log(mois)

    var annee = temps.getFullYear()
    console.log(annee)


    if (jour < 10){
        jour = "0" + jour
    }if (mois < 10){
        mois = "0" + mois
    }

    console.log(`${jour}/${mois}/${annee}`)

}
var dateFormat = formatDate()

