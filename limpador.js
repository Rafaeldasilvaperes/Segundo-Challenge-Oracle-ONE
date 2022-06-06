import { limpaLetrasErradas } from './adicionaLetrasErradas.js';

export function limpador() {
  var pai = document.getElementById("container-certas");
  limpaLetrasErradas();
  pai.innerHTML = "";
  letrasErradas.innerHTML = "";
  palavraDaVez = "";
  ganhado = false;
  letrasErradas = [];
}