// Criar um método para ler propiedades de uum objeto e exibir somente as propiedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropiedades(filme);
function exibirPropiedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}