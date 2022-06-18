import { geradorDePalavras } from './geradorDePalavras.js'
import { escolhedorDePalavras } from './escolhedorDePalavras.js'
import { clicked } from './botaoClicked.js'
import { bodyScroll } from './bodyScroll.js'


export function iniciar() {
  if(!called){
    clicked()
    called = true;
    geradorDePalavras(escolhedorDePalavras(textoTeste));
    bodyScroll()
  }else{
    return
  }
}

var inicializador = document.getElementById("iniciar-btn");
inicializador.addEventListener("click", iniciar, false);