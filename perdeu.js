import { blockClick } from "./botaoClicked.js";

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
    return;
  }
}
