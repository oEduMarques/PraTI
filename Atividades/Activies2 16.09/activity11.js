// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    {
        cliente: "Luiz",
        produto: "Hamburguer",
        quantidade: 2
    },
    {
        cliente: "Giovana",
        produto: "Batata Frita",
        quantidade: 1
    },
    {
        cliente: "Vitor",
        produto: "Sorvete",
        quantidade: 3
    },
]

let quantTotal = {}

pedidos.forEach(pedido => {
    if (!quantTotal[pedido.cliente]){
        quantTotal[pedido.cliente] = 0
    }
    quantTotal[pedido.cliente] += pedido.quantidade;
})

console.log(quantTotal)