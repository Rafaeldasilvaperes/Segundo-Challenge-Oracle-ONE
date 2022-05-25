export function geradorDePalavras(palavra) {
  palavraDaVez = palavra.toUpperCase();
  console.log("Palavra da vez: " + palavra);
  arr = ArrayParaPalavra();
  for (palavra in palavraDaVez) {
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
