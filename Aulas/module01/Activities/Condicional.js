const prompt = require('prompt-sync')()
// node Activities/Condicional.js

// Exercícios com if

// 1 - Verifique se um número é positivo, negativo ou zero

// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.

// const num1 = Number(prompt('Digite um número: '));

// if(num1 > 0){
//     console.log('O número informado é positivo')
// } else if(num1 < 0){
//     console.log('O número informado é negativo')
// } else{
//     console.log('O número é zero')
// }


// 2 - Verifique se um ano é bissexto

// Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

// Exercícios com if/else


// let ano = Number(prompt("Digite um ano para ser verificado: "))

// if(ano % 4 == 0 && ano % 100 !== 0){
//     console.log('O ano é bissexto.')
// }else if(ano % 400 == 0){
//     console.log('O ano é bissexto.')
// }else{
//     console.log('O ano não é bissexto.')
// }




// 3 - Calcule a média de três números e determine o conceito

// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let note1 = Number(prompt('Digite a primeira nota do aluno: '));
// let note2 = Number(prompt('Digite a segunda nota do aluno: '));
// let note3 = Number(prompt('Digite a terceira nota do aluno: '));
// let media = 0

// // A = 9 - 10
// // B = 7 - 8
// // C = 5 - 6
// // D = 3 - 4
// // E = 1 - 2
// // F = 0

// media = ((note1 + note2 + note3) / 3);

// if(media == 0){
//     console.log('A nota do aluno é F.');
// }else if(media == 1 || media == 2){
//     console.log('A nota do aluno é E.')
// }else if(media == 3 || media == 4){
//     console.log('A nota do aluno é D.')
// }else if(media == 5 || media == 6){
//     console.log('A nota do aluno é C.')
// }else if(media == 7 || media == 8){
//     console.log('A nota do aluno é B.')
// }else{
//     console.log('A nota do aluno é A.')
// }





// 4 - Verifique se um número é par ou ímpar

// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.

// let num = Number(prompt('Digite um número que deseje verificar se é par ou impar: '))

// if(num % 2 == 0){
//     console.log('O número é par.')
// }else{
//     console.log('O número é impar.')
// }



// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

// Exercícios com switch

// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

// // let numberday = Number(prompt("Digite o numero de 0 - 7 para verificar o dia da semana: "))
// // let nomeday

// // switch(numberday){
// //     case 1:
// //         console.log("Domingo.")
// //         break;
// //     case 2:
// //         console.log("Segunda.")
// //         break;
// //     case 3:
// //         console.log("Terça.")
// //         break;
// //     case 4:
// //         console.log("Quarta.")
// //         break;
// //     case 5:
// //         console.log("Quinta.")
// //         break;
// //     case 6:
// //         console.log("Sexta.")
// //         break;
// //     case 7:
// //         console.log("Sabado.")
// //         break;
// // }






// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.

// Dica: Utilize os operadores aritméticos em cada caso do switch.

// // let n1 = Number(prompt("Digite o primeiro número:"))
// // let n2 = Number(prompt("Digite o segundo número:"))
// // let operator = prompt("Digite um operador (+, -, *, /)")
// // let resultado

// // switch(operator){
// //     case "+":
// //         resultado = n1 + n2;
// //         console.log("Resultado: ", resultado);
// //         break;

// //     case "-":
// //         resultado = n1 - n2;
// //         console.log("Resultado: ", resultado);
// //         break;
        
// //     case "*":
// //         resultado = n1 * n2;
// //         console.log("Resultado: ", resultado);
// //         break;

// //     case "/":
// //         resultado = n1 / n2;
// //         console.log("Resultado: ", resultado);
// //         break;
// // }






// 8 - Verifique a estação do ano

// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

// let season = Number(prompt("Digite um número de 1 - 4 para verificar a estação do ano: "))

// switch(season){
//     case "1":
//         console.log('A estação do ano é Primavera.')
//     case "2":
//         console.log('A estação do ano é Verão.')
//     case "3":
//         console.log('A estação do ano é Outono.')
//     case "4":
//         console.log('A estação do ano é Inverno.')
// }




// Exercícios combinados
// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// let idade = Number(prompt('Digite sua idade:'))
// let faixaet = null

// if(idade >= 0 && idade <= 12){
//     faixaet = "Criança"
// }else if(idade >= 13 && idade <= 17){
//     faixaet = "Adolescente"
// }else if(idade >= 18 && idade <= 59){
//     faixaet = "Adulto"
// }else if(idade >= 60){
//     faixaet = "Idoso"
// }else{
//     console.log('Valor invalido!')
// }

// switch(faixaet){
//     case "Criança":
//         console.log(`Você é ${faixaet}.`)
//         break;
//     case "Adolescente":
//         console.log(`Você é ${faixaet}.`)
//         break;
//     case "Adulto":
//         console.log(`Você é ${faixaet}.`)
//         break;
//     case "Idoso":
//         console.log(`Você é ${faixaet}.`)
//         break;
// }



// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

// let peso = Number(prompt('Digite o seu peso (kg): '));
// let altura = parseFloat(prompt('Digite a sua altura (m): '));
// let imc = 0;

// imc = peso / (altura * altura);
// console.log(`Seu IMC é: ${imc}`)

// if(imc < 18.5){
//     console.log("Você está abaixo do seu peso ideal.")
// }else if(imc >= 18.5 && imc <= 24.9){
//     console.log("Você está no seu peso ideal.")
// }else if(imc >= 25 && imc <= 29.9){
//     console.log("Você está com sobrepeso.")
// }else if(imc >= 30 && imc <= 34.9){
//     console.log("Você está com Obesiade grau I.")
// }else if(imc >= 35 && imc <= 39.9){
//     console.log("Você está com Obesiade grau II.")
// }else if(imc >= 40){
//     console.log("Você está com Obesiade grau III.")
// }