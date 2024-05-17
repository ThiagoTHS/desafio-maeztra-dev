function findBusiestYears(intervals) {
    const yearCount = {};

    // Conta o número de pessoas trabalhando em cada ano
    intervals.forEach(([start, end]) => {
        for (let year = start; year <= end; year++) {
            if (!yearCount[year]) {
                yearCount[year] = 0;
            }
            yearCount[year]++;
        }
    });

    // Determina o número máximo de pessoas trabalhando em qualquer ano
    let maxCount = 0;
    for (let year in yearCount) {
        if (yearCount[year] > maxCount) {
            maxCount = yearCount[year];
        }
    }

    // Identifica todos os anos com o número máximo de pessoas trabalhando
    const busiestYears = [];
    for (let year in yearCount) {
        if (yearCount[year] === maxCount) {
            busiestYears.push(parseInt(year));
        }
    }

    return busiestYears;
}

// Exemplos para usar:
console.log(findBusiestYears([[2000, 2005], [2003, 2007], [2001, 2003], [2005, 2008]])); // [2003, 2005]
console.log(findBusiestYears([[1980, 1985], [1981, 1983], [1982, 1984], [1984, 1986]])); // [1984]
console.log(findBusiestYears([[1990, 1995], [1995, 2000], [1995, 1997]])); // [1995, 1996, 1997]

/*
Explicação:

Contagem dos Anos Trabalhados:
Usei um objeto yearCount para armazenar a contagem de pessoas trabalhando em cada ano. Para cada intervalo [x, y], iterei do ano x ao ano y (inclusive) e incrementei a contagem para cada ano.

Determinação do Máximo:
Iterei pelas chaves do objeto yearCount para determinar o número máximo de pessoas trabalhando em qualquer ano.

Coleta dos Anos com a Contagem Máxima:
Novamente iterei pelas chaves do objeto yearCount e coletei todos os anos em que a contagem é igual ao máximo identificado.
*/
