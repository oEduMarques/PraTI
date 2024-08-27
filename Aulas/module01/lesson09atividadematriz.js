const prompt = require('prompt-sync')();
// // 1. Soma dos elementos de um array

// let car = [3, 10, 7, 9];

// let i = 0;
// let sum = 0
// while(i < car.length){
//     sum = sum + car[i]
//     console.log(car[i])
//     i++;

    
//     console.log('soma: ', sum)
// }

// // encontre o maior número em um array:

// let maior = car[0]
// for(let j = 0; j < car.length; j++){
//     if(car[j] > maior){
//         maior = car[j]
//     }
// }
// console.log('Maior valor dentro do Array: ', maior)



// // reverter um array:

// let arr = [1, 2, 3, 4];

// let reverse = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reverse.push(arr[k])
// }

// console.log(reverse)

// // 4. Crie um novo array contendo apenas os números pares

// let arr = [1, 2, 3, 4, 5, 6];
// let par = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         par.push(arr[i]);
//     }
//     console.log(par)
// }

// // 5. Contar Ocorrências de um valor: quantas vezes aquele número aparece no array

// let arr = [5, 6, 4, 3, 5, 3, 7, 8, 7, 8, 5, 3, 2, 1, 1, 4, 5, 6, 7];

// let val = Number(prompt('Digite um valor para verificar a ocorrência (1 - 10): '));
// let cont = 0;
// for(let i = 0; i < arr.length; i++){
//     if(val === arr[i]){
//         cont += 1
//     }
// }

// if(cont > 0){
//     console.log(`O valor ${val} aparece ${cont} vezes no array.`);
// } else {
//     console.log('O valor inserido não está presente no array!');
// }



// // matriz:

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matriz);
// console.table(matriz);
// console.log(matriz[0][2]);

// // mostrem na tela

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

// soma de matrizes:

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let matriz2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let matriz3 = [];

// for(let i = 0; i < matriz.length; i++){
//     matriz3[i] = []; // Inicia cada linha (subarray) de matriz3 como um array vazio
    
//     for(let j = 0; j < matriz[i].length; j++){
//         matriz3[i][j] = matriz[i][j] + matriz2[i][j]; // Soma os elementos correspondentes das duas matrizes
//     }
// }

// console.log(matriz3);

// // outro jeito:

// for(let i = 0; i < matriz.length; i++){
//     let somaLinha = []
//     for(let j = 0; j < matriz[i].length; j++){
//         somaLinha.push(matriz[i][j] + matriz2.push[i][j])
//     }
//     matriz3.push(somaLinha)
// }

// console.table(matriz3);

// // soma da diagonal principal "\"
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let soma = 0;

// // Loop para somar os elementos da diagonal principal
// for (let i = 0; i < matriz.length; i++) {
//     soma += matriz[i][i]; // Acessa e soma os elementos onde i == j
// }

// console.log("Soma da diagonal principal:", soma);