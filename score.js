export function score(){
    pontos = pontos + 50;
    pontuacao.textContent = pontos
    console.log("PONTOS: ", pontos)
    console.log("arr: ", arr) 
}
var pontos = 0;
var pontuacao = document.getElementById('pontuador');