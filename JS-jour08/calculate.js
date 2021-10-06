// EXERCICES JOUR 8 - NODE, NPM, PROMPT


// EXERCICE 01 - CALCULATOR

var args = process.argv.slice(2);

// console.log(parseInt(args[0]) * parseInt(args[1])); 
// console.log(args)


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
    if (operator === '-'){
        console.log(num1 + num2)
    }
    if (operator === '%'){
        console.log(num1 % num2)
    }
}
calculate(parseInt(args[0]), parseInt(args[1]), '*')

//console.log(process.argv)

// var args = process.argv.slice(2);

// console.log(parseInt(args[0]) * parseInt(args[1])); 
// console.log(args)

