const prompt = require('prompt-sync')()

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let idade = Number(prompt('Digite a sua idade: '))

if(idade > 0 && idade <= 12){
    console.log('De acordo com a sua idade, você é criança.')
} else if(idade >= 13 && idade <= 17){
    console.log('De acordo com a sua idade você é um adolescente.')
} else if(idade >= 18 && idade <= 59){
    console.log('De acordo com a sua idade você é adulto.')
} else if(idade >= 60){
    console.log('De acordo com a sua idade você é idoso.')
} else{
    console.error('Digite uma idade válida.')
}