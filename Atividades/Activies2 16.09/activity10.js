// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let objetos = [
    {
        produto: "Cadeira",
        quantidade: 4,
        valor: 130
    },
    {
        produto: "Mesa",
        quantidade: 2,
        valor: 350
    },
    {
        produto: "Pano de Mesa",
        quantidade: 2,
        valor: 40
    },
]

let valTotal = 0

objetos.forEach(valProd => {
    let somProd = (valProd.quantidade * valProd.valor)
    valTotal = valTotal + somProd
})

console.log(`Valor total dos produtos: R$${valTotal}`)