// array


// no JS, permite adicionar qualquer tipo, valor em um array

let carros = Array();

carros[0] = 'Civic '
carros[1] = '10'
carros[2] = true
carros['Hyago'] = '10';

console.log(carros)
// teste
let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

// adicionar no final, um elemento em um Array

livros.push('Sherlock Holmes')

console.log(livros)

//adicionar no começo do array 

livros.unshift('1984')

// retirar um elemento do array

livros.pop()

// retirar um elemento no começo do array

livros.shift()


// outros exemplos:

// length - remove os últimos 3 elementos
let array = [0, 1, 2, 3, 4, 5];    
array.length = array.length - 3; 
console.log( array ); // [0, 1, 2]

// pop - remove o último elemento
let array = [0, 1, 2, 3, 4, 5];    
array.pop(); 
console.log( array ); // [0, 1, 2, 3, 4]

// shift - remove o primeiro elemento
array = [0, 1, 2, 3, 4, 5];
array.shift(); 
console.log( array ); // [1, 2, 3, 4, 5];

// splice - remove 1 elemento de índice 2
array = [0, 1, 2, 3, 4 ,5];
array.splice(2,1); 
console.log( array ); // [0, 1, 3, 4, 5]

// splice - remove 3 elementos a parti do índice 1 
array = [0, 1, 2, 3, 4 ,5];
array.splice(1,3); 
console.log( array ); // [0, 4, 5]

// filter - cria um array com valores menores que 5
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
filtered = array.filter( value => value < 5);
console.log( filtered ); // [0, 1, 2, 3, 4]

// filter - cria um array com valores pares
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
filtered = array.filter( value => value % 2 === 0);
console.log( filtered ); // [0, 2, 4, 6, 8]