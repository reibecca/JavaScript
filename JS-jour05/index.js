// EXERCICES JAVA SCRIPT DANS UNE PAGE WEB 

console.log(document)

// On cible notre element
var image = document.getElementById("ia")
image.setAttribute("src", "https://i.pinimg.com/564x/5e/9b/24/5e9b24ccbe04a5b11c173929fc09830d.jpg")

var imgRock = document.getElementById("rock")
imgRock.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/pierre.png")

var imgPaper = document.getElementById("paper")
imgPaper.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/feuille.png")

var imgScissor = document.getElementById("scissor")
imgScissor.setAttribute("src", "https://farrradise.github.io/PierreFeuilleCiseaux/img/ciseaux.png")



// On déclare une fonction que l'on va appeler lors du click
function onButtonRock() {
    console.log("I clicked on my button")
  }

  function onButtonPapper() {
    console.log("I clicked on my button")
  }

  function onButtonCisor() {
    console.log("I clicked on my button")
  }