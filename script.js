// Jokenpo - Pedra, Papel e Tesoura
// Desenvolvido por: Rafael Berloni (Curso Dev Samurai)
// Data: 2024-06-27

// Variáveis globais
var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0; 

var computadorPontos = 0;
var computadorEscolha = 0;

// Função para sortear um número entre min e max
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Sorteia um número entre min e max 
}

// Função para exibir mensagens na tela
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto; // Exibe a mensagem na tela
}

// Função para definir o nome do jogador

function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome; // Define o nome do jogador na tela
}



// Função para calcular o vencedor 
// 0 - empate
// 1 - jogador vence
// 2 - computador vence
function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    else if (jogador == 1 && computador == 2) {
        return 2;
    }
    else if (jogador == 1 && computador == 3) {
        return 1;
    }

    else if (jogador == 2 && computador == 1) {
        return 1;
    }
    else if (jogador == 2 && computador == 2) {
        return 0;
    }
    else if (jogador == 2 && computador == 3) {
        return 2;
    }

    else if (jogador == 3 && computador == 1) {
        return 2;
    }
    else if (jogador == 3 && computador == 2) {
        return 1;
    }
    else if (jogador == 3 && computador == 3) {
        return 0;
    }
}

// Pontos para o jogador e computador
function somarPontoJogador() {
    jogadorPontos ++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos; 
}
function somarPontoComputador() {
    computadorPontos ++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos; 
}

// Função para selecionar a escolha do jogador ou computador
function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado'); // Adiciona a classe 'selecionado' à escolha feita
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado'); // Remove a classe 'selecionado' da escolha feita
}

// Função para iniciar o jogo, recebendo a escolha do jogador
// 1 - (Pedra)
// 2 - (Papel)
// 3 - (Tesoura)
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    // Sortear a jogada do computado 
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0) {
        mensagem('Empate!');
    }   
    else if (ganhador == 1) {
        mensagem('Você ganhou! Ponto para ' + jogadorNome);
        somarPontoJogador();
    }
    else if (ganhador == 2) {
        mensagem('Você perdeu! ponto para o Computador');
        somarPontoComputador();
    }  

    setTimeout(function() { 
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ', escolha uma opção para começar!');
    }, 2000); // Espera 2 segundos antes de deselecionar as escolhas e exibir a mensagem
}

document.getElementById('jogador-escolha-1').onclick = function() { jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function() { jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function() { jogar(3); };   


jogadorNome = prompt('Qual é o seu nome?'); /* Pergunta o nome do jogador */

mensagem('Bem-Vindo(a)! ' + jogadorNome + '. Escolha uma opção para começar!.'); /* Exibe a mensagem de boas-vindas */

definirNomeJogador(jogadorNome);