import { limpaLetrasErradas } from './adicionaLetrasErradas.js';
import { unClicked } from './botaoClicked.js'

export function limpador() {
  var pai = document.getElementById("container-certas");
  limpaLetrasErradas();
  unClicked();
  pai.innerHTML = "";
  letrasErradas.innerHTML = "";
  palavraDaVez = "";
  ganhado = false;
  letrasErradas = [];
}