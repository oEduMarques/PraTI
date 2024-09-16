// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    {
        titulo: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        anoLancamento: 1972
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        diretor: "Peter Jackson",
        anoLancamento: 2001
    },
    {
        titulo: "A Origem",
        diretor: "Christopher Nolan",
        anoLancamento: 2010
    },
    {
        titulo: "O Clube da Luta",
        diretor: "David Fincher",
        anoLancamento: 1999
    },
]

let filmesTitulo = []

filmes.forEach(tituloAdd =>{
    filmesTitulo.push(tituloAdd.titulo)
})

console.log(filmesTitulo)