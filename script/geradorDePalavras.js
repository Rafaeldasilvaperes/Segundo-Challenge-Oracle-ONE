export function geradorDePalavras(palavra) {
  if(!palavra){return}
  palavraDaVez = palavra.toUpperCase();
  arr = ArrayParaPalavra();
  for (var palavra in palavraDaVez) {
    var pai = document.getElementById("container-certas");
    var criador = document.createElement("span");
    criador.classList.add("span-letra");
    pai.appendChild(criador);
  }
}

function ArrayParaPalavra() {
  var LEN = palavraDaVez.length;
  var arr1 = new Array(LEN).fill("");
  return arr1;
}
