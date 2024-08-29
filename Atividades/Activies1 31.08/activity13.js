const prompt = require('prompt-sync')()

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.


let i = 0;
let numDec = 0
let somNum = 0

do{
    numDec = parseFloat(prompt('Digite um número decimal para inserir um valor ou insira 0 para parar e calcular a média: '))
    somNum += numDec
    i++
} while(numDec !== 0)

let media = somNum / (i - 1)
if(numDec === 0){
    console.log(`Média dos valores fornecidos: ${media.toFixed(2)}`)
}