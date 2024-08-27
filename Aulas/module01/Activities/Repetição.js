const prompt = require('prompt-sync')();

// Exercícios com 'for'

// 1 - Imprima a sequência de Fibonacci até o 10º termo

// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

// let ant = 0;
// let atual = 1;
// let prox = 0;
// let i;

// for(i = 0; i < 10; i++){
//     prox = ant + atual;
//     console.log(ant)
//     ant = atual;
//     atual = prox;

// }






// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".

// Dica: Um número primo só é divisível por 1 e por ele mesmo.

// let primo = Number(prompt("Insira um número para verificar: "));

// if(primo % 1 === 0 && primo % primo === 0){
//     console.log(`O valor ${primo} é um número primo.`)
// }else{
//     console.log(`O valor ${primo} não é um número primo.`)
// }




// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.

// Dica: Utilize dois loops for, um dentro do outro.


// let linha = 3
// let i = 0;
// let espaco = " ";

// for(i = 1; i <= 3; i++){
//     for(let j = 1; j <= i; j++){
//         console.log(j, espaco)
//         console.log(espaco);
//     }

//     console.log(espaco);
// }





// Exercícios com 'while'

// 4 - Calcule o fatorial de um número

// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

// let num = Number(prompt("Insira um número para calcular a fatorial: "));
// let i = 1;
// let fat = num;
// let result = 1;

// while (fat > 1) {
//     result *= fat;
//     fat--;
// }

// console.log(`O fatorial de ${num} é ${result}.`);


// 5 - Inverta os dígitos de um número


// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

// Dica: Use operações de módulo e divisão para extrair os dígitos.

// let numero = parseInt(prompt("Digite um número para inverter:"));
// let invertido = 0;

// while (numero > 0) {
//     let digito = numero % 10;      // Extrai o último dígito do número
//     invertido = invertido * 10 + digito; // Adiciona o dígito à parte invertida
//     numero = Math.floor(numero / 10);    // Remove o último dígito do número original
// }

// console.log("Número invertido:", invertido);



// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.

// Exercícios com 'do while'

// let numero = parseInt(prompt("Digite um número para verificar se é palíndromo:"));
// let original = numero;  // Armazena o número original para comparação depois
// let invertido = 0;

// do {
//     let digito = numero % 10;      // Extrai o último dígito do número
//     invertido = invertido * 10 + digito; // Adiciona o dígito à parte invertida
//     numero = Math.floor(numero / 10);    // Remove o último dígito do número original
// } while (numero > 0);

// if (original === invertido) {
//     console.log(original + " é um número palíndromo.");
// } else {
//     console.log(original + " não é um número palíndromo.");
// }


// 7 - Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

// 8 - Calcule a soma dos dígitos de um número
       
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

// 9 - Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

// Dica: Utilize dois loops, um dentro do outro.

// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.