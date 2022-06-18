export function geradorDeSVG(){
if(contador <= 10){
  var seletorDaVez = document.querySelector('.erro'+contador);
  seletorDaVez.classList.remove('erro'+contador)
  contador ++
  console.log(contador)
  }else{return}
}


var contador = 1;