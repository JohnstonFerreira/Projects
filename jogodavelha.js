var passo = 0;
var nomesJogador = [];
var vezJogador = 1;

function controlaExibicao() {
    let objetos = document.getElementsByName('passo');

    objetos.forEach(function(objeto, indice) {
        if (indice === passo) {
            objeto.style.display = 'block';
        } else {
            objeto.style.display = 'none';
        }
    });
}

function proximoPasso() {
    passo = passo +1; //passo ++; ou passo +1; é equivalente.

    if(passo == 3) escreveNomeJogadorVez();

    controlaExibicao();
}

function setaNomeJogador(numJogador) {
    let nomeJogador = document.getElementById('nomeJogador' + numJogador).value;

    if (nomeJogador === '') {
        alert('Favor informar o nome do Jogador');
        document.getElementById('nomeJogador' + numJogador).focus();
        return;
    }

    nomesJogador[numJogador - 1] = nomeJogador;
    console.log('Jogadores', nomesJogador);
    proximoPasso();
}

function efetuaJogada(objeto, numeroCelula) {
    // Variavel que contem referencia do objeto
    // que representa a casa que foi clicada pelo jogador
    let casaClicada = document.getElementById('casa' + numeroCelula);
    
    if (casaClicada.innerHTML != "") return;
    // objeto.innerHTML = "x";
    casaClicada.tag = vezJogador;

    if (vezJogador == 1) {
        casaClicada.innerHTML = "<img src=\"img/lula.png\" />";
        vezJogador = 2;              
    } else {
        casaClicada.innerHTML = "<img src=\"img/bolso.png\" />";
        vezJogador = 1;
    }
    escreveNomeJogadorVez();
}

function escreveNomeJogadorVez() {
    document.getElementById('nomeJogadorVez').innerHTML = "Agora é sua vez " + nomesJogador[vezJogador - 1];
}
