const prompt = require('prompt-sync')()

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let somNum = 0

for(let i = 1; i <= 5; i++){
    let num = Number(prompt(`Digite um ${i}º número: `))
    somNum += num
}

console.log('A soma dos número informado é: ', somNum)