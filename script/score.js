export function score(){
    if(!ganhado){
    pontos = pontos + 50;
    pontuacao.textContent = pontos
  
    }else{
        pontos = 0;
    }
}


var pontos = 0;
var pontuacao = document.getElementById('pontuador');