// Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia"
}

temEditora = false

for(let key in livro){
    if(key === 'editora'){
        temEditora = true
    }
}

if(temEditora === false){
    livro.editora = "Rocco"
}

console.log(livro)