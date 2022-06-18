

import { blockClick } from './botaoClicked.js'

export function ganhou() {
    var ganhou = document.getElementById("palavra-output");
    var msg = "GANHOU!";
    ganhou.value = msg;
    ganhado = true;
    teclada.setAttribute("readonly", false);
    blockClick();
    return;
}
