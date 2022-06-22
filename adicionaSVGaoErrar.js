import { popupWinOrLose } from './ganhouOuPerdeuPopup.js'

export function geradorDeSVG(){
if(contador <= 10){
  var seletorDaVez = document.querySelector('.erro'+contador);
  seletorDaVez.style.display="block"
  contador ++;
  if(contador == 11){
    popupWinOrLose("PERDEU!", "P");
  }
  console.log("CONTADOR: ",contador);
  }else{
    
    return
  }
}

export function limpadorSVGErradas(){
  console.log(contador.length)
  for(var i = 1; i < 11; i++) {
    var seletorDaVez = document.querySelector('.erro'+i);
    seletorDaVez.style.display="none"
    console.log("contador: ",i)
  }
  contador = 1;
}

var contador = 1;