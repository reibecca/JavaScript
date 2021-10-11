// EXERCICES JS JOURS 9 - DEBUG, DATE, REGEX


// EXERCICE 01 - AUJOURD'HUI

var week = ["dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

function whatDayIsToday (){

    var temps = new Date();
    var day = temps.getDay();
    console.log(day);

    console.log(week[day])

    console.log(`Aujourd'hui nous sommes le ${week[day]}`)
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
    var date = new Date()
    
    var jour = date.getDate()
    console.log(jour)

    var mois = date.getMonth() + 1
    console.log(mois)

    var annee = date.getFullYear()
    console.log(annee)


    if (jour < 10){
        jour = "0" + jour
    }if (mois < 10){
        mois = "0" + mois
    }

    console.log(`${jour}/${mois}/${annee}`)

}
formatDate()

console.log("")



// EXERCICE 04 - AGE

// function calculateAge (){
//     var temps = new Date()

//     var bornDay = new Date("2021-10-07")
//     console.log(bornDay);

//     var age = temps.getFullYear() - bornDay.getFullYear()
    
//     if (temps.getMonth() < bornDay.getMonth()){
//         age -= 1
//     }if (temps.getDate() < bornDay.getDate()){
//         age -=1
//     }

//     console.log(age);
// }
// calculateAge()



function calculateAge (birthDate){
    var temps = new Date()

    var age = temps.getFullYear() - birthDate.getFullYear()
    
    if (temps.getMonth() === birthDate.getMonth() && temps.getDate() < birthDate.getDate()){
        age -= 1
    }

    console.log(age);
}   
calculateAge(new Date("1987-08-26"))