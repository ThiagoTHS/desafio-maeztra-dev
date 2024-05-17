function factorial(n) {
    if (n < 0) {
        return undefined; // Fatorial não é definido para números negativos
    }
    if (n === 0 || n === 1) {
        return 1; // 0! e 1! são ambos iguais a 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function numberOfArrangements(numPeople) {
    return factorial(numPeople);
}

// Exemplos para usar:
console.log(numberOfArrangements(5)); // 120 (5! = 5 x 4 x 3 x 2 x 1)
console.log(numberOfArrangements(3)); // 6 (3! = 3 x 2 x 1)
console.log(numberOfArrangements(1)); // 1 (1! = 1)
console.log(numberOfArrangements(0)); // 1 (0! = 1)
console.log(numberOfArrangements(10)); // 3628800 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1)

/*
Explicação:

Função factorial:
Verificei se o número 𝑛 é negativo. O fatorial não é definido para números negativos, então retorna undefined nesses casos.
Trata os casos especiais onde 𝑛 é 0 ou 1, retornando 1, já que 0!=1!=1.
Usei um loop for para calcular o fatorial de 𝑛 iterativamente. Multiplicei result por cada número de 2 até 𝑛.

Função numberOfArrangements:
Simplesmente chama a função factorial passando o número de pessoas como argumento e retorna o resultado.
*/
