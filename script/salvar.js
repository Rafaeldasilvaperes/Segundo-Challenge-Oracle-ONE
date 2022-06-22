import { opcoes } from "./opcoes.js";
import { iniciar } from "./iniciar.js";
import { limpador } from './limpador.js'
import { error } from "./error.js";
import { limpadorSVGErradas } from "./adicionaSVGaoErrar.js";


export function salvar() {
  var txt = document.querySelector(".entrada-texto-opcional").value;
  if (txt.length == 0) {
    
   
    error("Preencha com uma palavra/texto!");
  }
  
    if(txt.length > 5){
      textoTeste = txt;
      called = false;
      limpador();
      iniciar();
      opcoes();
      limpadorSVGErradas();
      var riscosLetrasCertas = document.querySelectorAll('.span-letra');
      riscosLetrasCertas.forEach((item) => {
      item.classList.add('span-letra-visible');
    })
      
  }
}

var done = document.getElementById("btn-done");
done.addEventListener("click", salvar, true);