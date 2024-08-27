const prompt = require('prompt-sync')()

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota1 = parseFloat(prompt('Digite a sua 1ª nota: '))
let nota2 = parseFloat(prompt('Digite a sua 2ª nota: '))
let nota3 = parseFloat(prompt('Digite a sua 3ª nota: '))

let mediaNotas = (nota1 + nota2 + nota3) / 3

mediaNotas = Math.round(mediaNotas);

if(mediaNotas >= 0 && mediaNotas <= 3 ){
    console.log(`Aluno reprovado com média: ${mediaNotas}`)
} else if(mediaNotas >= 4 && mediaNotas <= 6){
    console.log(`Aluno em recuperação com média: ${mediaNotas}`)
}else if(mediaNotas >= 7 && mediaNotas <= 10){
    console.log(`Aluno aprovado com média: ${mediaNotas}`)
}