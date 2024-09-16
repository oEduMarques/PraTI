// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.


let alunos = [
    {
    nome: "Giovana",
    nota1: 9.5,
    nota2: 10
    },
    {
    nome: "Eduardo",
    nota1: 8,
    nota2: 8.5
    },
    {
    nome: "João",
    nota1: 4,
    nota2: 6.5
    },
]

for(let key of alunos){
    mediaNotas = ((key.nota1 + key.nota2) / 2)
    console.log(`Nome: ${key.nome}, Média: ${mediaNotas}`)
}