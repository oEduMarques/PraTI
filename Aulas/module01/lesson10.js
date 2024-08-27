// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['People'] = Array('Aristóteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'

// console.table(thingsList)

// let fruitsList = Array()

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melãncia'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// console.log(fruitsList.sort()) // ordena a lista por ordem alfabética

// console.log(fruitsList.indexOf('Morango')) // retorna a posição em que o argumento está 
// //--- pode sr usado para verificar se está dentro do array, não esta quando retorna -1

// // ordenar números:

// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a,b) => a - b))

// //FUNCÇÃO

// function CalculateLandArea(width, height){
//     let area = width * height;
//     return area;
// }

// let width = 10;
// let height = 200;

// let area = CalculateLandArea(width, height);

// console.log(`A área possui ${area} metros quadrados.`)

// atividade:

let fruitsList = Array()

fruitsList[0] = 'Maça'
fruitsList[1] = 'Banana'
fruitsList[2] = 'Melãncia'
fruitsList[3] = 'Uva'
fruitsList[4] = 'Morango'

function ordenaralfa(fruitsList){
    let ordenado = console.log(fruitsList.sort());
    return ordenado;
}

ordenaralfa(fruitsList)