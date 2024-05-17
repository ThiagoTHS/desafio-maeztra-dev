function isSequential(number) {
    // Converte o número para uma string
    const str = number.toString();
    let isIncreasing = true;
    let isDecreasing = true;

    // Itera pelos dígitos da string do número
    for (let i = 1; i < str.length; i++) {
        const currentDigit = parseInt(str[i]);
        const previousDigit = parseInt(str[i - 1]);
        const difference = currentDigit - previousDigit;

        // Verifica se a diferença entre dígitos consecutivos é maior que 1
        if (Math.abs(difference) > 1) {
            return false;
        }

        // Atualiza as variáveis de controle
        if (difference < 0) {
            isIncreasing = false;
        }
        if (difference > 0) {
            isDecreasing = false;
        }
    }

    // Retorna verdadeiro se for crescente ou decrescente
    return isIncreasing || isDecreasing;
}

// Exemplos para usar:
console.log(isSequential(12345)); // true (sequência crescente)
console.log(isSequential(54321)); // true (sequência decrescente)
console.log(isSequential(12233)); // true (sequência crescente com dígitos iguais)
console.log(isSequential(987654321)); // true (sequência decrescente)
console.log(isSequential(13579)); // false (não é sequencial)
console.log(isSequential(1243)); // false (não é sequencial)

/* 
Explicação:

Conversão para string: 
A função começa convertendo o número inteiro para uma string para facilitar a iteração sobre seus dígitos.

Iteração e Verificação: 
Em seguida, a função percorre cada dígito, verificando a diferença entre o dígito atual e o anterior. Se a diferença absoluta for maior que 1, a função retorna false imediatamente, pois não é uma sequência válida.

Controle de Crescente/Decrescente: 
Durante a iteração, duas variáveis (isIncreasing e isDecreasing) são usadas para controlar se a sequência é crescente ou decrescente. Estas variáveis são atualizadas conforme a diferença entre os dígitos.

Resultado: 
No final, a função retorna true se a sequência for válida (crescente ou decrescente), ou false caso contrário.
*/
