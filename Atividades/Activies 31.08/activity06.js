const prompt = require('prompt-sync')()

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let lado1 = parseFloat(prompt('Digite o comprimento do 1º lado: '))
let lado2 = parseFloat(prompt('Digite o comprimento do 2º lado: '))
let lado3 = parseFloat(prompt('Digite o comprimento do 3º lado: '))

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    console.log('Os dados fornecidos formam um triangulo.')
}   else {
    console.log('Os dados fornecidos não formam um triangulo.')
}

if (lado1 === lado2 && lado2 === lado3) {
    console.log('É um triângulo equilátero, pois possui todos os lados iguais.')
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('É um triângulo isósceles, pois possui dois lados iguais.')
} else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
    console.log('É um triângulo escaleno, pois possui todos os lados diferentes.')
}