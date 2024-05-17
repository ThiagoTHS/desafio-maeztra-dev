function isValidSequence(s) {
    const stack = [];
    const matchingPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Se é um caractere de abertura, adiciona na pilha
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Se é um caractere de fechamento, verifica se corresponde ao topo da pilha
            if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
                return false;
            }
        }
    }

    // No final, a pilha deve estar vazia se todos os caracteres foram fechados corretamente
    return stack.length === 0;
}

// Exemplos para usar:
console.log(isValidSequence("()")); // true
console.log(isValidSequence("()[]{}")); // true
console.log(isValidSequence("(]")); // false
console.log(isValidSequence("([)]")); // false
console.log(isValidSequence("{[]}")); // true

/*
Explicação:

Uso da Pilha:
Utilizei uma pilha (stack) para armazenar os caracteres de abertura ((, {, [).
Quando encontrei um caractere de abertura, ele é empilhado.

Verificação de Caracteres de Fechamento:
Quando encontrei um caractere de fechamento (), }, ]), verificei se a pilha está vazia (o que significaria um fechamento sem abertura correspondente) ou se o topo da pilha corresponde ao caractere de abertura esperado.
Utilizei um objeto matchingPairs para mapear cada caractere de fechamento ao seu correspondente caractere de abertura.

Verificação Final:
Após iterar pela string, verificei se a pilha está vazia. Se estiver vazia, significa que todos os caracteres de abertura foram corretamente fechados; caso contrário, há caracteres de abertura sem fechamento correspondente.
*/
