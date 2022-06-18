// JS - IMPORTS

import { adicionadorLetraCerta } from "./adicionadorLetraCerta.js";
import { adicionaLetrasErradas } from "./adicionaLetrasErradas.js";
import { ganhou } from "./ganhou.js";
import { perdeu } from "./perdeu.js";
import { LinkClick } from "./Links.js";
import { opcoes, abreFecha } from "./opcoes.js";
import { iniciar } from "./iniciar.js";
import { salvar } from './salvar.js';
import { textoDefault } from './textoDefault.js'
import { geradorDeSVG } from './adicionaSVGaoErrar.js'
import { checaFinalDePagina } from './checaFinalDePagina.js'
import { score } from './score.js'



// Função Principal
function verificaEntrada(evento) {
  if (ganhado) {
    teclada.blur();
  }

  if (!ganhado && evento.keyCode >= 65 && evento.keyCode <= 90) {
    var char = evento.key.toUpperCase();

    for (var i in palavraDaVez) {
      let charTexto = palavraDaVez[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let charEntrada = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let textoNormalized = palavraDaVez.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let arrNormalized = arr[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      
      // Se PalavraDaVez[i] for igual ao Charactere E Charactere difente da Arr[i]
      // Arr possui itens já digitados 
      // Então adiciona letra na tela e encaixa a letra na posição atual na var Arr
      if (charTexto === charEntrada && charEntrada !== arrNormalized) {

        console.log("Char: ",charEntrada,"arr: ", arr[i])
        arr.splice(i, 1, palavraDaVez[i]);
        adicionadorLetraCerta(i, palavraDaVez[i]);
        score() 
      }

      if (!letrasErradas.includes(char) && !textoNormalized.includes(charEntrada)) {
        letrasErradas.push(char);
        erradas.value = letrasErradas;

        geradorDeSVG();

        adicionaLetrasErradas(char);
        console.log(letrasErradas);
        perdeu(letrasErradas);
      }

      if (palavraDaVez == arr.join("")) {
        console.log(palavraDaVez);
        console.log(arr.join(""));
        ganhou();
      }
    }
  }
}

// vars globais
window.keyboard = document.querySelector("[data-keyboard]");
window.textoTeste = textoDefault();
window.letrasErradas = [];
window.ganhado = false;
window.arr = [];
window.palavraDaVez = "";
window.called = false;


// Força reload da página no topo da página
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Inicializador
iniciar;

// Checa final de página e mostra header do 4° Wrapper
checaFinalDePagina();

// Event listeners entrada pelo teclado pc e saida
window.erradas = document.getElementById("letras-erradas");
window.teclada = document.getElementById("entrada-input");

teclada.addEventListener("keydown", verificaEntrada, false);
window.addEventListener("keydown", verificaEntrada, false);

// Entrada pelo teclado virtual
document.addEventListener("click", function (evento) {
  if (evento.target.matches("[data-key]")) {
    console.log(evento)
    evento.keyCode = evento.target.dataset.key.charCodeAt(0);
    evento.key = evento.target.dataset.key;
    return verificaEntrada(evento);
  }
});



// event listener Botão Opções FEITO
// window.done = document.getElementById("btn-done");
// done.addEventListener("click", salvar, true);

//


// event listener Opções toggle 
opcoes;
abreFecha;



