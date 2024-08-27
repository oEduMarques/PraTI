// let serie = {
//     nome: "The Boys",
//     genero: ["Ação", "Paródia", "Heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 9
//     },

//     mostrarCaracteristicas: function(){
//         return `O nome da série é: + ${this.nome}. E sua classificação é: + ${this.classificacao}`
//     }
// }

// console.log(serie)
// console.log(serie.nome)

// console.log(serie.mostrarCaracteristicas())

// // Crie um objeto livro:

// let livro = {
//     nome: 'Harry Potter: E a pedra filosofal',
//     genero: 'Fantásia',
//     numeroPag: 450,
//     tipoCapa: 'Dura',
//     idioma: 'Português',
//     autor: 'Fulano de Tal',


// }

// console.log(livro);

// let carro = {
//     marca: 'Honda',
//     modelo: 'Civic',
//     placa: 'CIV-5555',
//     cavalos: '150',
//     ano: 1999,

//     mostrarCaracteristicasCar: function() {
//         return ("Este carro é um " + this.modelo + ", da marca " + this.marca + ", ano " + this.ano)
//     },

//     acelerar: function() {
//         return ("Acelerando a caranga.")
//     }
// }

// console.log(carro)
// console.log(carro.mostrarCaracteristicasCar())
// console.log(carro.acelerar)


// let motor = 1000
// let nome = 'BMW S1000R'
// let tipo = 'Esportiva'

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }

// console.log(moto)




// let atleta = {
//     nome: 'Rayssa Leal',
//     esporte: 'Skate street',
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil' // forma de adicionar ao objeto
// atleta.medalha = {
//     ouro: 10,
//     prata: 5,
//     bronze: 10
// }

// atleta.celebrarVitoria = () => {return 'Ganhei!!'}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())






// FUNCAO CONSTRUTORA:

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         console.log('O computador está ligando.')
//     }

//     this.mostrarEspecificacoes = function(){
//         return `
//                 processador: ${this.processador}
//                 gpu: ${this.gpu}
//                 ram: ${this.ram}
//                 armazenamento: ${this.armazenamento}`
//     }
// }

// let pc = new computador("i9", "4090", "16GB", "512 GB SSD")
// console.log(pc.mostrarEspecificacoes())

// OUTRA FORMA DE FAZER:

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando!'))
// console.log(jogo1.jogar())




//OUTRAS ESTRUTURAS DE REPETIÇÃO:

// for in: percorre o objeto

let carros = {
    modelo: 'Buggati',
    ano: 2023,
    cor: 'Laranja'
}

for(let key in carros){
    // console.log(`${key}: ${carros[key]}`)
}





// for of: acessa a posição enseguida

const jogadores = [['Pele', 'Maradona'], 'Neymar', 'Messi']

for(let jogador of jogadores){
    // console.log(jogador)
}





const nome = 'Eduardo'

for(let char of nome){
    // console.log(char)
}




