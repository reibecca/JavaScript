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




// Faire une fonction qui va choisir aléatoirement le signe de l'IA

var min = 1
var max = 3

function randomIA(){

    var game = ["rock", "paper", "scissor"]
    
    var random = game[Math.floor(Math.random() * game.length)]
    console.log(`L'IA a joué ${random}`)

    var choixIA = document.getElementById("choixIA")
    if (random === "rock"){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/pierre.png") 
    } else if (random === "paper"){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/feuille.png")
    } else if (random === "scissor"){
        choixIA.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/ciseaux.png")
    }
    return random;
}



// On déclare une fonction que l'on va appeler lors du click
function onButtonClick(choice) {
    console.log(`Tu as joué ${choice}`)
    var choixIA = randomIA() 
    result(choice, choixIA)
}


// Comparaison faite entre les paramètres "ia" et "me"
var compteurIA = 0
var compteurPlayer = 0

function result(me, ia) {
    if (me === ia){
        console.log("Il y a égalité")
    }else if ((me === "paper" && ia === "rock") || (me === "scissor" && ia === "paper") || (me === "rock" && ia === "scissor")){
        compteurPlayer += 1
        console.log(compteurPlayer);
        console.log("Tu as gagné !")
    }else {
        compteurIA +=1
        console.log(compteurIA);
        console.log("Tu as perdu :(")
    }
}
