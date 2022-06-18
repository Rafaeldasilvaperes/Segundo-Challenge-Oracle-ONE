export function escolhedorDePalavras(array) {
  if (array) {
    var bibliotecaDePalavras = organizadorDeTexto(array);
    var numeroDaVez = Math.floor(Math.random() * bibliotecaDePalavras.length);
    console.log(bibliotecaDePalavras[numeroDaVez], "library")
    return bibliotecaDePalavras[numeroDaVez];
  } else{return array = textoTeste}
}

function organizadorDeTexto(texto) {
  if (texto) {
    var txt = texto;
    var regex = /[-,/ !?"'&()=+><\[\]:;,*\.^0-9 ^\u2013-\u204A]+/;
    var textSplit = txt.split(regex);
    

    for (var i in textSplit) {
      if (textSplit[i].length < 5) {
        textSplit.splice(i, 1, "");
        
      }
    }
    var valor = "";
    textSplit = textSplit.filter(function (item) {
      return item !== valor;
    });
    
    if (textSplit.length == 0) {
      escolhedorDePalavras(textoTeste);
    }
    
    return textSplit;
  }
}
