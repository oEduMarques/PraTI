// Com base no array:numero = [10, 20, 30, 40, 50, 60]

// Use a desestruturação de arrays para atribuir valores aos tres primeiros elementos: a, b e c


numero = [10, 20, 30, 40, 50, 60]

const [a, b, c] = numero

console.log(a)
console.log(b)
console.log(c)

const desenvolvedor = {
    nome: 'Carlos',
    idade: 32,
    contato: {
        email: 'carlos.dev@exemple.com',
        endereco: {
            cidade: 'Porto Alegre',
            estado: 'RS',
            pais: 'Brasil'
        }
    },
    projetos: ['Website', 'App Mobile', 'API']
};

// 1. Desestruture nome e idade diretamente do objeto:

const {nome, idade} = desenvolvedor

console.log(nome)
console.log(idade)


// 2. Extraia o email da propriedade contato:

const {contato: {email}} = desenvolvedor
console.log(email)

// 3. Extraia cidade, estado e país do objeto aninhado endereco:

const {contato: {endereco: {cidade, estado, pais}}} = desenvolvedor

console.log(cidade)
console.log(estado)
console.log(pais)

// 4. Extraia o primeiro e o segundo projeto da lista de projetos:

const {projetos: [projeto1, projeto2]} = desenvolvedor

console.log(projeto1)
console.log(projeto2)