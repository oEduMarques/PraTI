// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.


let produto = {
    valor: 75,
    estoque: 3,
    validade: 5, //anos
    peso: 0.850
}

function filtrarProdVal(produto, valFiltro){
    let resultado = {}

    for (let key in produto)
        if(produto[key] > valFiltro)
            resultado[key] = produto[key] 

    return resultado
}

console.log(filtrarProdVal(produto, 3))