const prompt = require('prompt-sync')()

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let numApple =  Number(prompt('Digite o número de maças a comprar: '))
let priceApple = 0

if (numApple > 0 && numApple < 12) {
    priceApple = numApple * 0.30
    console.log(`Valor a pagar pelas ${numApple} maçãs: R$ ${priceApple.toFixed(2)}`)
} else if (numApple >= 12) {
    priceApple = numApple * 0.25
    console.log(`Valor a pagar pelas ${numApple} maçãs: R$ ${priceApple.toFixed(2)}`)
} else {
    console.log('Número de maçãs inválido.')
}