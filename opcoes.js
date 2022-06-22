// import { bodyScroll } from "./bodyScroll.js";
// import { LinkClick } from "./Links.js";
// import { salvar } from './salvar.js';

export function opcoes(){
    var texto = document.querySelector('.entrada-texto-opcional');
    var keyboard = document.getElementById('keyboard-id');
    
    keyboard.classList.toggle('active')
    texto.value = '';
    blur.classList.toggle('active');
    pop.classList.toggle('active');
    console.log(blur, pop)
}


var blur = document.getElementById('blur');
var pop = document.getElementById('popup');


document.getElementById("config-btn").addEventListener("click",
  opcoes, false); 

document.getElementById('close').addEventListener("click", opcoes, false);

document.getElementById("config-btn1").addEventListener("click",opcoes, false)

