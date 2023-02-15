/* Os dois métodos-chaves para usar com Javascript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.Executa

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a exucuçaõ da função continuamente. 
*/

function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";

    //EXECUTA APENAS UMA VEZ APÓS O TEMPO DETERMINADO
    tempo = setTimeout(function() {
        document.getElementById('tempo').innerHTML  = "Executou o setTimeout";
    }, 5000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML  = "Parou a contagem";
}