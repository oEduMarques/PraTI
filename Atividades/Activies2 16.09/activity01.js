// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: "Ford",
    modelo: "ka",
    ano: 2018,
    cor: "Branco"
}

for (let key in carro){
    console.log(`${key}: ${carro[key]}`)
}

