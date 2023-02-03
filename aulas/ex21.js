// Faixa de preço

//primeira opção
let faixas = [
    {tooltip: 'até R$700', minimo:0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo:700, maximo: 1000},
    {tooltip: 'R$700 ou mais', minimo:1000, maximo: 9999999}
];

//segunda opção
function criaFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),
]

//terceira opção (Construtor Function)
function FaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('a',10,20),
    new FaixaPreco('b',20,30),
    new FaixaPreco('c',30,40)
];
console.log(faixas);
console.log(faixas2);
console.log(faixas3);

