// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 01 - CALCULATOR

function calculate (num1, num2, operator){
    if (operator === '+'){
        console.log(num1 + num2)
    }
    if (operator === '-'){
        console.log(num1 - num2)
    }
    if (operator === '*'){
        console.log(num1 * num2)
    }
    if (operator === '/'){
        console.log(num1 / num2)
    }
    if (operator === '%'){
        console.log(num1 % num2)
    }
}
// calculate(5,4, '*') ---> lancer la fonction avec des paramètres

var parameters = process.argv.slice(2)
var parameter1 = parseInt(parameters[0])
var parameter2 = parseInt(parameters[1])
var parameter3 = (parameters[2])

calculate (parameter1, parameter2, parameter3)


