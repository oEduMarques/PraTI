const prompt = require('prompt-sync')()

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = Number(prompt('Digite um número a ser exibido 10 vezes: '))

for(let i = 1; i <= 10; i++){
    console.log(num)
}