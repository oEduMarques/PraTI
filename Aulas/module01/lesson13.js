// calcular a média das notas dos alunos de um professor
// e verificar se está acima da média de aprovação. Use um loop
// for...in para iterar sobre as propriedades dentro de professor.grades
// Imprima se o professor esta acima da média de aprovação(considerando 6.0 como média)

let professor = {
    name: 'Marcelo',
    subject: 'Math.',
    grades: {
        fulano: 6.0,
        ciclano: 10.0,
        beltrano: 4.0
    }
};
let totalAluno = 0;
let totalNotas = 0;

for(let aluno in professor.grades){
    totalNotas += professor.grades[aluno];
    totalAluno++;
};

let mediaAlunos = totalNotas / totalAluno;


if(mediaAlunos >= 6){
    // console.log('O Professor foi aprovado com a média de seus alunos em: ' + mediaAlunos)
} else {
    // console.log('O Professor não foi aprovado pela media dos alunos: ' + mediaAlunos + ', estar abaixo de 6')
}




// Verificar e listar livros publicados antes de 2000. Use um loop for...of para iterar sobre o array biblioteca.
// Imprima o título e o ano dos livros que atendem a essa condição.

let library = [
    {title: 'O Hobbit', author: 'J. R. R. Tolkien', year: 1925},
    {title: 'Harry Potter: Prisioneiro de Azkaban', author: 'J. R. Rolling', year: 1999},
    {title: 'Nárnia', author: 'C. S. Lewis', year: 2010}

]

for(let book of library){
    if(book.year < 2000){
        // console.log(`O livro ${book.title}, escrito por ${book.author}, foi públicado em ${book.year}.`)
    }
}




// Contar a quantidade de filmes por gênero.
// Use o método for...Each para iterar sobre o array filmes.
// Para cada filme, verifique se o genero já existe no objeto de contagem.
// Se existir, incremente a contagem; se não, adicione ao objeto com a
// contagem inicial de 1.


let movies = [
    {title: 'Tropa de Elite', genre: 'Ação'},
    {title: 'Top Gun', genre: 'Ação'},
    {title: 'Interestelar', genre: 'Ficção Ciêntifica'},
    {title: 'Senhor dos Anéis', genre: 'Aventura'},
    {title: 'Poderosão Chefão', genre: 'Ação'},
    {title: 'Vingadores: Ultimato', genre: 'Heróis'},
    {title: 'Deadpool & Wolverine', genre: 'Heróis'},
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount){
    console.log(`Existe ${genreCount[genre]} filmes do gênero ${genre}`)
}


