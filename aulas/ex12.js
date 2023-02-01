// Velocidade máxima de até 70 
// A cada 5km acima do limite você ganha 1 ponto 
// Math.floor()
// Caso pontos maior que 12 -> "Carteira Suspendida"
verificarVelocidade(80)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
           console.log('Carteira Suspensa');
        else 
           console.log('pontos' ,pontos)
        
    }
}