

  var participantes = [{
    nome: "Raul",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },

  {
    nome: "Cleiton",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  },

  {
    nome: "José",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
  ];


  function calcularPontos(jogador) {
    var pontos = jogador.vitoria * 3 + jogador.empate;
    return pontos;
  } 

  //raul.pontos = calcularPontos(raul);
  //cleiton.pontos = calcularPontos(cleiton);
  //jose.pontos = calcularPontos(jose);
  
  //var jogadores = [raul, cleiton, jose]
  var jogadores = [];
  for (let play of participantes) {
    jogadores.push(play);
    };

  function exibirNaTela(jogadores) {
    var elemento = "";
    for (var i=0; i<jogadores.length; i++) {
      elemento +="<td>" + jogadores[i].nome + "</td>";
      elemento +="<td>" + jogadores[i].vitoria + "</td>";
      elemento +="<td>" + jogadores[i].empate + "</td>";
      elemento +="<td>" + jogadores[i].derrota + "</td>";
      elemento +="<td>" + jogadores[i].pontos + "</td>";
      elemento +="<td><button onClick='adicionarVitoria(" + i + ")'>Vitórias</button></td>";
      elemento +="<td><button onClick='adicionarEmpate(" + i + ")'>Empates</button></td>";
      elemento +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrotas</button></td>";
      elemento += "</tr>";
    }
    var elementoTabela = document.getElementById("tabelaJogadores");
  elementoTabela.innerHTML = elemento
  };

  exibirNaTela(jogadores);

  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitoria++;
    jogador.pontos = calcularPontos(jogador);
    exibirNaTela(jogadores);
  }

  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empate++;
    jogador.pontos = calcularPontos(jogador);
    exibirNaTela(jogadores);
  }

  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrota++;
    exibirNaTela(jogadores);
  }

  
  
  
  

  /* jogador.forEach(function (tabela) {
    var tr = document.createElement('tr');
    for (var campo in tabela) {
        var td = document.createElement('td');
        td.innerHTML = tabela[campo];
        tr.appendChild(td);
    };
    elementoTabela.appendChild(tr);
  });

   /* elementoTabela.innerHTML = `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(jogador)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(jogador)">Empate</button></td>
            <td><button onClick="adicionarDerrota(jogador)">Derrota</button></td>
        </tr>
    `;
    */
  
  /* function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }
  */