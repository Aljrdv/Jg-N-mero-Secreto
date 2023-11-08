let listasDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function escrevaTexto (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});  
}
function mensagemInicial() {
    escrevaTexto('h1','Jogo do Número Secreto');
    escrevaTexto('p','Escolha um número entre 1 e 50');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
      if (chute == numeroSecreto) {
      escrevaTexto('h1','Você Acertou !!!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
      escrevaTexto('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
       } else  {
        if (chute > numeroSecreto) {
            escrevaTexto('p', 'O número secreto é menor');
        } else {
            escrevaTexto('p', 'O número secreto é maior');
        }  
        tentativas++;
        limparCampo();
       }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random ()* numeroLimite +1);
    let quantidadeElementosLista = listasDeNumerosSorteados.length;
    if (quantidadeElementosLista == numeroLimite) {
        listasDeNumerosSorteados = [];
    }

    if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados);
        return(numeroEscolhido);
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}