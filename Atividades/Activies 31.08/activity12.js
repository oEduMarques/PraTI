const prompt = require('prompt-sync')()

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let numTab = Number(prompt('Digite um número para verificar a taboada: '))

for(let i = 1; i <= 10; i++){
    console.log(`${numTab} x ${i} = `, (numTab * i))
}