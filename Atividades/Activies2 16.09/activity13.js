// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        {
            nome: "Alicate",
            quantidade: 2,
            precoUnitario: 25
        },
        {
            nome: "Martelo",
            quantidade: 1,
            precoUnitario: 30
        },
        {
            nome: "Cola de cano",
            quantidade: 2,
            precoUnitario: 17
        },
        {
            nome: "Bucha",
            quantidade: 45,
            precoUnitario: 0.30
        },
        {
            nome: "Lâmpada",
            quantidade: 6,
            precoUnitario: 10
        },
    ]
}

let valTotal = 0

carrinho.itens.forEach(valProd => {
    let somProd = (valProd.quantidade * valProd.precoUnitario)
    valTotal = valTotal + somProd
})

console.log(`Valor total do carrinho: ${valTotal}`)