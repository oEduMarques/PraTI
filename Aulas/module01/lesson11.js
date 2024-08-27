// // função anonima: syntaxe oculta, usada para 

// let teste = function(){
//     console.log('Hello World!')
// }

// teste()

// function showFunction(successCalback, errorCallback){
//     if(true){
//         successCalback("Requisição bem sucedida")
//     } else{
//         errorCallback("Erro na requesição")
//     }
// }

// let successCalback = function(message){
//     console.log(message)
// }


// //arrow => é a mesma coisa que função
// let errorCalback = (message) => {
//     console.error(message)
// }

// showFunction(successCalback, errorCalback)

// // realizar as mesmas atividades da aula 9 mas colocando dentro de uma função

const prompt = require('prompt-sync')();
// 1. Soma dos elementos de um array

// let car = [3, 10, 7, 9];

// function SomaArray(car){

//     let i = 0;
//     let sum = 0
//     while(i < car.length){
//         sum = sum + car[i]
//         console.log(car[i])
//         i++;
    
        
//         console.log('soma: ', sum)
//     }
// }

// SomaArray(car)


// // encontre o maior número em um array:

// let car = [3, 10, 7, 9];
// function LargestNumber(array){
//     let maior = array[0]
//     for(let j = 0; j < array.length; j++){
//         if(array[j] > maior){
//         maior = array[j]
//         }
//     }
//     console.log('Maior valor dentro do Array: ', maior)
// }
// LargestNumber(car)



// // reverter um array:

// let arr = [1, 2, 3, 4];

// function ArrayRevert(array){
//     let reverse = [];
//     for(let k = array.length - 1; k >= 0; k--){
//         reverse.push(array[k])
//     }
    
//     console.log(reverse)    
// }

// ArrayRevert(arr);



// // 4. Crie um novo array contendo apenas os números pares

// let arr = [1, 2, 3, 4, 5, 6];

// function ArrayPar(arr){
//     let par = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             par.push(arr[i]);
//         }
//         console.log(par)
//     }
// }
// ArrayPar(arr)


// 5. Contar Ocorrências de um valor: quantas vezes aquele número aparece no array

// let arr = [5, 6, 4, 3, 5, 3, 7, 8, 7, 8, 5, 3, 2, 1, 1, 4, 5, 6, 7];

// function ArrayOcorrence(arr){
//     let val = Number(prompt('Digite um valor para verificar a ocorrência (1 - 10): '));
//     let cont = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(val === arr[i]){
//             cont += 1
//         }
//     }
    
//     if(cont > 0){
//         console.log(`O valor ${val} aparece ${cont} vezes no array.`);
//     } else {
//         console.log('O valor inserido não está presente no array!');
//     }
// }

// ArrayOcorrence(arr);




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





// manipulação de string:

let nome = 'Eduardo'
let nome2 = 'Eduardo Marques'

console.log('Eduardo'.length)
console.log('Eduardo'.charAt(0))
console.log(nome.indexOf('d'))

// console.log(nome.replace('Eduardo', 'Eduardo Marques')) // substitui

console.log(nome2.substr(5, 5)) // apartir da 5 posição, eu só pego os 5 caracteres seguintes

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log(nome2.trim())


// matemáticos:

console.log(Math.ceil(5.75)) // ARREDONDA PRA CIMA
console.log(Math.floor(5.75)) // PRA BAIXO
console.log(Math.round(5.75)) // ARREDONDA DE FORMA INTELIGENTE
console.log(Math.sqrt(100)) // RAIZ QUADRADA
console.log(Math.pow(100, 2)) // POTENCIACAO
console.log(Math.cbrt(100)) // RAIZ CUBICA
console.log(Math.abs(100.20)) // VALOR ABSOLUTO
console.log(Math.random()) // GERA UM VALOR ALEATORIO


// datas

let date = new Date()

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())

console.log(date.getDate() + 100) // adicionar dias

console.log(date.toString())
date.setDate(date.getDate() + 100)
console.log(date.toString())

let date1 = new Date(2024, 24, 8)
let date2 = new Date(2023, 24, 8)

console.log(date1.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(miliseconds_between_dates)

let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias`)

// inverter uma String
// contar vogais
// gerar números aleatórios
// Dias entre duas Datas
// formatar data