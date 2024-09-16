// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    {
        nome: "Antonio",
        idade: 56,
        cidade: "Alvorada"
    },
    {
        nome: "Marcos",
        idade: 32,
        cidade: "Eldorado"
    },
    {
        nome: "Felipe",
        idade: 28,
        cidade: "Caxias do Sul"
    },
    {
        nome: "Ricardo",
        idade: 69,
        cidade: "Guaíba"
    },
    {
        nome: "Maria",
        idade: 17,
        cidade: "Viamão"
    },
]

let count = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        count++
    }

})

console.log(`Quantidade de clientes acima de 30 anos: ${count}`)