import { limpador } from './limpador.js';
import { salvar } from './salvar.js'
import { iniciar } from './iniciar.js'


export function popupWinOrLose(texto, GP){
  
  popup.classList.add('ganhou-visible')
  if(GP == "P"){
    popup.style.backgroundImage = "url(./img/perdeu-img.jpg)";
    var btn = document.getElementById('continuar-winlose')
    btn.parentNode.removeChild(btn);
  }else{
    
    var score = document.getElementById('pontuador').textContent;
    var divPontos = document.getElementById('pontuacao-ganhou')
    var text = `Você fez: ${score} pontos`
    divPontos.classList.add('pontuacao-ganhou-classe')
    divPontos.textContent = text
    
    popup.style.backgroundImage = "url(./img/ganhou-img.jpg)";
  }
  var txt = document.getElementById('WinOrLose')
  txt.textContent = texto;
}

function continuar(){
  var divPontos = document.getElementById('pontuacao-ganhou')
  divPontos.textContent = ''
    textoTeste = textoTeste;
      called = false;
      limpador();
      iniciar();
      popup.classList.remove('ganhou-visible')
      var riscosLetrasCertas = document.querySelectorAll('.span-letra');
      riscosLetrasCertas.forEach((item) => {
      item.classList.add('span-letra-visible');
    })
    

}

document.getElementById('continuar-winlose').addEventListener('click', continuar ,false)
document.getElementById('reiniciar-winlose').addEventListener('click',function(){
   window.location.reload()
  },false)

var popup = document.getElementById('popup-winlose');