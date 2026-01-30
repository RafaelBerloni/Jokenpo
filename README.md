# 🕹️ Jokenpô - Pedra, Papel e Tesoura

Este é um projeto clássico de Jokenpô desenvolvido em **JavaScript**, **HTML5** e **CSS3**. O jogo permite que um usuário jogue contra o computador, mantendo um placar em tempo real e oferecendo uma interface visual intuitiva.

## 🚀 Funcionalidades

* **Interatividade:** O jogador insere seu nome ao iniciar.
* **Lógica de Jogo:** Sistema que identifica vitória, derrota ou empate.
* **Placar Automático:** Soma pontos dinamicamente para o jogador ou computador.
* **Feedback Visual:** As opções selecionadas ganham destaque e as mensagens de status são atualizadas a cada rodada.
* **Animação Simples:** Uso de `setTimeout` para resetar as escolhas após 2 segundos, permitindo um fluxo contínuo de jogo.

## 📂 Estrutura de Pastas

Para que o projeto funcione corretamente, os arquivos devem estar organizados da seguinte forma:

```text
/
├── index.html       # Estrutura principal do jogo
├── style.css        # Estilização e layout
├── script.js        # Lógica em JavaScript
└── img/             # Pasta contendo as imagens
    ├── pedra.png
    ├── papel.png
    └── tesoura.png
