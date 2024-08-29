const prompt = require('prompt-sync')()

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))

if(num1 === num2){
    console.log('Por favor, certifica-se de informar dois valores diferentes!')
}

if(num1 < num2){
    console.log(`Valor em número crescente: ${num1}, ${num2}.`)
} else{
    console.log(`Valor em número crescente: ${num2}, ${num1}.`)
}