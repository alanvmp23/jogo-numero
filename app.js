let listadenumeroescolhidos = [];
let numerolimite = 10;
function exibirtextonatela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

exibirtextonatela("h1", "Jogo do número secreto");
exibirtextonatela("p", "Escolha um número de 1 a 10");

function exibirmensageminicial() {
  exibirtextonatela("h1", "Jogo do número secreto");
  exibirtextonatela("p", "Escolha um número de 1 a 10");
}

function gerarnumeroaleatorio() {
  console.log(listadenumeroescolhidos);
  let numeroaleatorio = parseInt(Math.random() * numerolimite + 1);
  let quantidadeelementosnalista = listadenumeroescolhidos.length;

  if (quantidadeelementosnalista == numerolimite) {
    listadenumeroescolhidos = [];
  }

  if (listadenumeroescolhidos.includes(numeroaleatorio)) {
    console.log(listadenumeroescolhidos);

    return gerarnumeroaleatorio();
  } else {
    listadenumeroescolhidos.push(numeroaleatorio);
    console.log(listadenumeroescolhidos);
    return numeroaleatorio;
  }
}

function limparcampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reiniciar() {
  numeroaleatorio = gerarnumeroaleatorio();
  limparcampo();
  tentativas = 1;
  exibirmensageminicial();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

let numeroaleatorio = gerarnumeroaleatorio();
let tentativas = 1;

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroaleatorio) {
    exibirtextonatela("h1", "Acertou");
    let palavratentativa = tentativas > 1 ? " tentativas" : " tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas}${palavratentativa}`;
    exibirtextonatela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroaleatorio) {
      exibirtextonatela("p", "O número secreto é menor:");
    } else {
      exibirtextonatela("p", "O número secreto é maior:");
    }

    tentativas++;
    limparcampo();
  }
}
