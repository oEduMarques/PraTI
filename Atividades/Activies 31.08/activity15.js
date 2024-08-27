const prompt = require('prompt-sync')()

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for

let atual = 1
let ant = 0
let prox = 0

for(let i = 0; i < 10; i++){
    prox = ant + atual;
    console.log(ant)
    ant = atual;
    atual = prox;
}