// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    {
        produto: "Leite",
        quantidade: 12,
        minimo: 32
    },
    {
        produto: "Água",
        quantidade: 26,
        minimo: 60
    },
    {
        produto: "Feijão",
        quantidade: 9,
        minimo: 40
    },
]

estoque.forEach(prod => {
    if(prod.quantidade < prod.minimo){
        prod.quantidade = prod.minimo * 2
    }
})

console.log(estoque)