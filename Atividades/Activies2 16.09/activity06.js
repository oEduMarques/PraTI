// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {
        nome: "Andre", 
        cargo: "Diretor",
        salario: 9000
    },
    {
        nome: "Lucas", 
        cargo: "Aux. Administrativo",
        salario: 2500
    },
    {
        nome: "Tiago", 
        cargo: "Gerente",
        salario: 27000
    },
    {
        nome: "Mateus", 
        cargo: "Operador de máquina",
        salario: 5000
    },
    {
        nome: "Marcos", 
        cargo: "Estágiario",
        salario: 1300
    },
]

function filtroSal(arr, valSal){
    for(let key of arr){
     if(key.salario > valSal)
        console.log(`Nome: ${key.nome}, Salário: ${key.salario}`)   
    }
}

filtroSal(funcionarios, 4000)