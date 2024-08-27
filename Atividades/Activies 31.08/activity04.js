const prompt = require('prompt-sync')()

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.


let options = console.log(`
    1. Escolha a 3ª opção.
    2. Escolha a 1ª opção.
    3. Escolha a 2ª opção.
`)
let chase = Number(prompt('Digite uma opção: '))

switch(chase){
    case 1:
        console.log('Falei para escolher a 3ª opção!!')
        break
    case 2:
        console.log('Falei para escolher a 1ª opção!!')
        break
    case 3:
        console.log('Falei para escolher a 2ª opção!!')
        break
}