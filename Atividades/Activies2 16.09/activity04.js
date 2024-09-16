// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


let pessoas = [
    {
        nome: "Giovana",
        idade: 18,
        cidade: "Tubarão"
    },
    {
        nome: "João",
        idade: 69,
        cidade: "Porto Alegre"
    },
    {
        nome: "José",
        idade: 22,
        cidade: "Rio de Janeiro"
    }
]


for(let key of pessoas){
    console.log(key)
}