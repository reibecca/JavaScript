// EXERCICES JAVA SCRIPT DANS UNE PAGE WEB 

// console.log(document)


// On cible notre element : on affecte une image à l'IA pour la représenter visuellement 
var image = document.getElementById("ia")
image.setAttribute("src", "https://i.pinimg.com/564x/5e/9b/24/5e9b24ccbe04a5b11c173929fc09830d.jpg")

// On affecte des images aux éléments "pierre", "papier", "ciseau"
var imgRock = document.getElementById("rock")
imgRock.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/pierre.png")

var imgPaper = document.getElementById("paper")
imgPaper.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/feuille.png")

var imgScissor = document.getElementById("scissor")
imgScissor.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/ciseaux.png")



// On déclare une fonction que l'on va appeler lors du click
function onButtonRock() {
    console.log("I choose rock")
}

function onButtonPapper() {
    console.log("I choose paper")
}

function onButtonScissor() {
    console.log("I choose scissor")
}



// Faire une fonction qui va choisir aléatoirement le signe de l'IA

var min = 1
var max = 3
var choose = 0

function randomIA(){
    
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(`L'IA a joué ${random}`)

    var choixIA = document.getElementById("choixIA")
    if (random === 1){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/pierre.png") 
    } else if (random === 2){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/feuille.png")
    } else if (random === 3){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/ciseaux.png")
    }
}
randomIA()


