const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let number = Number(prompt('Digite um número para verificar se é par ou ímpar: '))

if(number % 2 === 0){
    console.log(`O número ${number} é par`)
} else {
    console.log(`O número ${number} é impar`)
}