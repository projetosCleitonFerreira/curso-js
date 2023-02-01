// criar uma função que exiba a quantidade de * que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}