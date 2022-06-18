import { abreFecha } from "./opcoes.js";
import { iniciar } from "./iniciar.js";
import { limpador } from './limpador.js'


export function salvar() {
  var txt = document.querySelector(".entrada-texto-opcional").value;
  if (txt.length == 0) {
    called = false;
    limpador();
    iniciar();
    abreFecha();
  }
  if(txt){
    console.log("TEMOS TEXTO")
    abreFecha();
  }
}

var done = document.getElementById("btn-done");
done.addEventListener("click", salvar, true);