import { bodyScroll } from "./bodyScroll.js";
import { LinkClick } from "./Links.js";
import { salvar } from './salvar.js';

export function opcoes(){
  
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var pop = document.getElementById('popup');
    pop.classList.toggle('active');
    
}

export function abreFecha(){
  var blur = document.getElementById('blur');
  var pop = document.getElementById('popup');
  var texto = document.querySelector('.entrada-texto-opcional');
  texto.value = '';
  blur.classList.toggle('active');
  pop.classList.toggle('active');
  
}

var Blur = document.getElementById("config-btn");
Blur.addEventListener("click", opcoes, false);

var fechar = document.getElementById("close");
fechar.addEventListener("click", abreFecha, false);