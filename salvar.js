import { abreFecha } from "./opcoes.js";
import { iniciar } from "./iniciar.js";
import { limpador } from './limpador.js'

export function salvar() {
  var txt = document.querySelector(".entrada-texto-opcional").value;
  if (txt !== null) {
    called = false;
    limpador();
    iniciar();
    abreFecha();
  }
}