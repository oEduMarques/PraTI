// // console.log(10 > 5) //true
// // console.log(10 < 5) //false
// // console.log(10 >= 5) //true
// // console.log(10 <= 5) //false
// // console.log(10 == 5) // false
// // console.log(10 == '10') //true
// // console.log(10 === '10') //false
// // console.log(10 != 5) //true
// // console.log(10 !== 5) //true


// // //operadores lógicos
// // console.log((10 < 5) && (10 > 2))
// // console.log((10 > 5) || (10 < 2))
// // console.log((10 > 5) || !(10 < 2))
// // console.log(!(10 > 5) || (10 < 2))


// // let usuario = "eduardo"
// // let senha = 123456

// // console.log((usuario == "eduardo") && (senha == 123456))




// // const grade = 4

// // if(grade >= 60){
// //     console.log("Aprovado!")
// // } else {
// //     console.log("Reprovado!")
// // }




// // Exercício 1: Verificar Número Par ou Ímpar

// // Descrição: Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar.


// // let number = 4
// // if (number % 2 == 0){
// //     console.log("O numero é par")
// //   }
// //   else {
// //     console.log("O numero é ímpar")
// //   }



// //   Exercício 2: Comparação de Três Números

// //   Descrição: Escreva um programa que receba três números e determine qual é o maior.
  
// // let number1 = 1;
// // let number2 = 2;
// // let number3 = 3;

// // if ((number1 > number2) && (number1 > number3)) {
// //     console.log("O número 1 é maior");
// // } else if ((number2 > number1) && (number2 > number3)) {
// //     console.log("O número 2 é maior");
// // } else {
// //     console.log("O número 3 é maior");
// // }



// // Exercício 3: Calculadora Simples

// // Descrição: Escreva um programa que implemente uma calculadora simples com operações de adição, subtração, multiplicação e divisão.

// // let numero1 = 4
// // let numero2 = 8
// // let operacao = "+"

// // let resultado

// // if (operacao === '+') {
// //     resultado = numero1 + numero2
// // } else if (operacao === '-') {
// //     resultado = numero1 - numero2
// // } else if (operacao === '*') {
// //     resultado = numero1 * numero2
// // } else if (operacao === '/') {
// //     if (numero2 !== 0) {
// //         resultado = numero1 / numero2
// //     } else {
// //         resultado = "Erro: Divisão por zero não é permitida"
// //     }
// // } else {
// //     resultado = "Operação inválida"
// // }

//  const prompt = require('prompt-sync')();

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




// // Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

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



// // Exercício 2: Calcular o número de dias em um mês.

// // - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// // - Os meses 4, 6, 9 e 11 tem 30 dias 
// // - Mês 2 tem 28 dias


// let mes = prompt("Digite o número respectivo ou o nome do mês: ");


// switch (mes) {
//     case "1":
//     case "janeiro":
//         console.log("Janeiro possui 31 dias.");
//         break;
//     case "2":
//     case "fevereiro":
//         console.log("Fevereiro possui 28 ou 29 dias.");
//         break;
//     case "3":
//     case "março":
//         console.log("Março possui 31 dias.");
//         break;
//     case "4":
//     case "abril":
//         console.log("Abril possui 30 dias.");
//         break;
//     case "5":
//     case "maio":
//         console.log("Maio possui 31 dias.");
//         break;
//     case "6":
//     case "junho":
//         console.log("Junho possui 30 dias.");
//         break;
//     case "7":
//     case "julho":
//         console.log("Julho possui 31 dias.");
//         break;
//     case "8":
//     case "agosto":
//         console.log("Agosto possui 31 dias.");
//         break;
//     case "9":
//     case "setembro":
//         console.log("Setembro possui 30 dias.");
//         break;
//     case "10":
//     case "outubro":
//         console.log("Outubro possui 31 dias.");
//         break;
//     case "11":
//     case "novembro":
//         console.log("Novembro possui 30 dias.");
//         break;
//     case "12":
//     case "dezembro":
//         console.log("Dezembro possui 31 dias.");
//         break;
//     default:
//         console.log("Entrada inválida! Por favor, insira o número ou o nome do mês.");
// }