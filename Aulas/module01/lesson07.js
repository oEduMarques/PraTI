const prompt = require('prompt-sync')();

// for - repetição: (<variavel>; <condição>; <incremento>)





// exemplo do uso de ${} - serve para dizer que é uma variável
// let teste = 1
// let teste2 = 2

// console.log(`${teste} + ${teste2}`)
// console.log("${teste} + ${teste2}")
// console.log(`teste + teste2`)


// tabuada:
// let i = 0
// let tabuada = Number(prompt("Digite um número para saber a tauada: "))

// for(i = 0; i <= 10; i++){
//     console.log(`${tabuada} * ${i} =`, tabuada * i)
// }


// a soma dos numeros de 1 a 100
// let i = 1
// let cont = 0

// for(i = 1; i <= 100; i++){
//     cont += i
// }

// console.log(i)



// exibição do 10 a 1
// let j = 0
// let dec = 10

// for(j = 10; j >= 1; j--){
//     console.log(j)
// }




// exibição do 10 a 1
// let i = 10;

// while(i >= 1){
//     console.log(i);
//     i--;
// }



// a soma dos numeros de 1 a 100
// let i = 1;
// let soma = 0

// while(i <= 100){
//     soma += i
//     i++;
// }

// console.log(soma)



// algoritmo para receber numeros decimais até que o usuário digite 0 e que
//faça a média aritmética desses números.

// let num = 1;
// let soma = 0;
// let media = 0;
// let i = 0;

// while(true){
//     num = Number(prompt("Digite um número decimal ou clique 0 para encerrar: "));
//     if(num == 0){
//         console.log("Você inseriu 0 e a operação foi encerrada.");
//         media = soma / i;
//         console.log(media);
//         break;
//     }
//     soma = num + soma;
//     i++;
//     console.log(i);

// }