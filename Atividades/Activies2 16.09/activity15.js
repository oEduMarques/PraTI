// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    {
        tipo: "entrada",
        valor: 1000
    },
    {
        tipo: "saida",
        valor: 200
    },
    {
        tipo: "entrada",
        valor: 500
    }
]

let saldo = 0

transacoes.forEach(trans => {
    if(trans.tipo == "entrada"){
        saldo += trans.valor
    }else if(trans.tipo == "saida"){
        saldo -= trans.valor
    }
})

console.log(`Saldo: R$ ${saldo}`)