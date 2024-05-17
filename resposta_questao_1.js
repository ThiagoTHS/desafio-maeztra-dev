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

Contagem de Ocorrências:
Criei um objeto count para armazenar a contagem de cada número no array.
Iterei pelo array e incrementamos a contagem de cada número no objeto count.

Identificação de Duplicados:
Criei um array duplicates para armazenar os números que aparecem mais de uma vez.
Iterei pelas chaves do objeto count. Se a contagem de um número for maior que 1, significa que é um número duplicado e o adicionamos ao array duplicates.

Retorno do Array de Duplicados:
A função retorna o array duplicates, que contém todos os números que aparecem mais de uma vez no array original.
*/
