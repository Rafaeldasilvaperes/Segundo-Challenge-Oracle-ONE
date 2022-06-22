

import { blockClick } from './botaoClicked.js'
import { opcoes } from './opcoes.js';
import { popupWinOrLose } from './ganhouOuPerdeuPopup.js'

export function ganhou() {
    ganhado = true;
    
    teclada.setAttribute("readonly", false);
    popupWinOrLose("VENCEU!", "G")
    
    blockClick();
    return;
}


