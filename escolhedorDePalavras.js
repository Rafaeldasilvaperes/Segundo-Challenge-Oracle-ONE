export function escolhedorDePalavras(array) {
  var bibliotecaDePalavras = organizadorDeTexto(array);
  var numeroDaVez = Math.floor(Math.random() * bibliotecaDePalavras.length);
  return bibliotecaDePalavras[numeroDaVez];
}

function organizadorDeTexto(texto) {
  var txt = texto;
  var regex = /[, !?"^0-9]+/;
  var textSplit = txt.split(regex);

  for (var i in textSplit) {
    if (textSplit[i].length < 5) {
      textSplit.splice(palavra, 1, "");
    }
  }
  var valor = "";
  textSplit = textSplit.filter(function (item) {
    return item !== valor;
  });
  console.log(textSplit);
  return textSplit;
}
