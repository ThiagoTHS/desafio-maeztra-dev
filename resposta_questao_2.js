function findDuplicates(arr) {
    const count = {};
    const duplicates = [];

    // Conta a ocorrência de cada número no array
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    // Verifica quais números têm contagem maior que 1
    for (let num in count) {
        if (count[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }

    return duplicates;
}

// Exemplos para usar:
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2])); // [1, 2]
console.log(findDuplicates([1, 1, 1, 2, 2, 3])); // [1, 2]
console.log(findDuplicates([5, 5, 5, 5, 5])); // [5]
console.log(findDuplicates([1, 2, 3, 4, 5])); // []
console.log(findDuplicates([10, 20, 10, 30, 40, 50, 30])); // [10, 30]

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
