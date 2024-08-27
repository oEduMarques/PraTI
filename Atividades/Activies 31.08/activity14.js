const prompt = require('prompt-sync')()

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let numCalc = Number(prompt("Insira um número para calcular a fatorial: "))
let fat = numCalc
let result = 1

while (fat > 1) {
    result *= fat
    fat--
}

console.log(`O fatorial de ${numCalc} é ${result}.`)