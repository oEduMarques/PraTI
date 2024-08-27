const prompt = require('prompt-sync')()

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let altura = parseFloat(prompt('Digite a sua altura (m): '))
let peso = parseFloat(prompt('Digite o seu peso (kg): '))

let imc = peso / (altura * altura)

if(imc <= 18.5){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está abaixo do peso ideal.`)
}else if(imc >= 18.6 && imc <= 24.9){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está em seu peso ideal.`)
}else if(imc >= 25 && imc <= 29.9 ){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está com sobrepeso.`)
}else if(imc >= 30 && imc <= 34.9 ){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está com obesidade grau I.`)
}else if(imc >= 35 && imc <= 39.9 ){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está com obesidade grau II.`)
}else if(imc >= 40){
    console.log(`De acordo com o seu IMC: ${imc.toFixed(2)}, você está com obesidade grau III.`)
}