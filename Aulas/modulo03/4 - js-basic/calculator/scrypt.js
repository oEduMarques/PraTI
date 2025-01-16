// Função para inserir valores na tela da calculadora
function inserir(valor) {
    // Obtém a referência do campo de entrada da calculadora
    let tela = document.formulario.tela;

    // Limita a quantidade de caracteres na tela a no máximo 14
    if (tela.value.length < 14) {
        // Verifica se o valor inserido e o último valor na tela são ambos operadores
        if (isOperador(valor) && isOperador(tela.value[tela.value.length - 1])) {
            return; // Se forem dois operadores seguidos, a função para e não insere o valor
        }
    }

    // Adiciona o valor digitado ao campo da calculadora
    tela.value += valor;
}

// Função para limpar completamente a tela da calculadora
function limparTela() {
    document.formulario.tela.value = ""; // Define o campo de entrada como uma string vazia
}

// Função para apagar o último caractere digitado
function deletar() {
    let tela = document.formulario.tela; // Obtém a referência da tela
    tela.value = tela.value.slice(0, -1); // Remove o último caractere da string
}

// Função para calcular o resultado da expressão digitada
function calcularTotal() {
    let tela = document.formulario.tela; // Obtém a referência da tela
    const expressao = tela.value; // Obtém a expressão matemática digitada pelo usuário

    // Verifica se a expressão não está vazia e se o último caractere não é um operador
    if (expressao && !isOperador(expressao[expressao.length - 1])) {
        try {
            // Chama a função calcularExpressao para resolver a expressão
            let resultado = calcularExpressao(expressao);
            tela.value = resultado; // Exibe o resultado na tela
        } catch (error) {
            // Se houver erro no cálculo (ex: divisão por zero), exibe um alerta
            alert("Expressão inválida");
            limparTela(); // Limpa a tela da calculadora
        }
    }
}

// Função que verifica se um caractere é um operador matemático
function isOperador(char) {
    return ['+', '-', '/', '*'].includes(char); // Retorna true se o caractere for um operador
}

// Função que resolve a expressão matemática usando eval()
// ⚠️ Atenção: eval() pode ser perigoso se usado com entradas não confiáveis
function calcularExpressao(expressao) {
    return eval(expressao); // Avalia e retorna o resultado da expressão matemática
}
