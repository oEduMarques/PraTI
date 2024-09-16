// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    {
        nome: 'Notebook',
        preco: 3400,
        desconto: 0.1
    },
    {
        nome: 'PlayStation 5',
        preco: 4200,
        desconto: 0.1
    },
    {
        nome: 'SmartWatch',
        preco: 1200,
        desconto: 0.1
    }
]

produtos.forEach(produto => {
    let PrecoDesc = ((produto.preco) - (produto.preco * produto.desconto))
    console.log(`Nome: ${produto.nome}, preço com desconto: ${PrecoDesc}`)
})