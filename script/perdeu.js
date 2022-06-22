import { blockClick } from "./botaoClicked.js";
import { limpador } from "./limpador.js";
import { limpadorSVGErradas } from "./adicionaSVGaoErrar.js";
import { popupWinOrLose } from './ganhouOuPerdeuPopup.js'

export function perdeu(array) {
  if (array.length < 10) {
    return;
  } else {
    var perdeu = document.getElementById("palavra-output");
    var msg = "PERDEU!";
    perdeu.value = msg;
    ganhado = true;
    teclada.setAttribute("readonly", false);
    blockClick();
    popupWinOrLose("PERDEU!","P");
    limpador()
    
    return;
  }
}
