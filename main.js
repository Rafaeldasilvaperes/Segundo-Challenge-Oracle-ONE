// JS

import { adicionadorLetraCerta } from "./adicionadorLetraCerta.js";
import { adicionaLetrasErradas } from "./adicionaLetrasErradas.js";
import { escolhedorDePalavras } from "./escolhedorDePalavras.js";
import { ganhou } from "./ganhou.js";
import { geradorDePalavras } from "./geradorDePalavras.js";
import { perdeu } from "./perdeu.js";
import { LinkClick } from "./Links.js";

// Função Principal
function verificaEntrada(evento) {
  console.log(evento);
  if (ganhado) {
    teclada.blur();
  }

  if (!ganhado && evento.keyCode >= 65 && evento.keyCode <= 90) {
    var char = evento.key.toUpperCase();
    console.log(evento);
    for (var i in palavraDaVez) {
      let charTexto = palavraDaVez[i]
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      let charEntrada = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let textoNormalized = palavraDaVez
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (charTexto === charEntrada) {
        arr.splice(i, 1, palavraDaVez[i]);
        adicionadorLetraCerta(i, palavraDaVez[i]);
      }

      if (
        !letrasErradas.includes(char) &&
        !textoNormalized.includes(charEntrada)
      ) {
        letrasErradas.push(char);
        erradas.value = letrasErradas;
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
window.textoTeste = "aeéíóúãõàèìùç";
window.letrasErradas = [];
window.ganhado = false;
window.arr = [];
window.palavraDaVez = "";

// Inicializador
document.getElementById("iniciar-btn").addEventListener(
  "click",
  function () {
    escolhedorDePalavras(textoTeste);
    geradorDePalavras(escolhedorDePalavras(textoTeste));
  },
  { once: true }
);

// event listeners entrada e saida
window.erradas = document.getElementById("letras-erradas");
window.teclada = document.getElementById("entrada-input");

teclada.addEventListener("keydown", verificaEntrada, false);
window.addEventListener("keydown", verificaEntrada, false);

// event listen links svg (0,1,4)
window.link = document.getElementById("svg-container");
link.addEventListener("click", LinkClick, false);
//

var blur1 = document.getElementById('config-btn')
blur1.addEventListener("click",function(){
  var blur = document.getElementById('blur')
  blur.classList.toggle('active');
  var pop = document.getElementById('popup')
  pop.classList.toggle('active')
})

var close = document.getElementById('close')
close.addEventListener("click", function(){
  var blur = document.getElementById('blur')
  blur.classList.toggle('active');
  var pop = document.getElementById('popup')
  pop.classList.toggle('active')
})







// entrada pelo teclado virtual
document.addEventListener("click", function (evento) {
  if (evento.target.matches("[data-key]")) {
    evento.keyCode = evento.target.dataset.key.charCodeAt(0);
    evento.key = evento.target.dataset.key;
    return verificaEntrada(evento);
  }
});
