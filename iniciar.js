import { geradorDePalavras } from './geradorDePalavras.js'
import { escolhedorDePalavras } from './escolhedorDePalavras.js'

export function iniciar() {
  if(!called){called = true;
    geradorDePalavras(escolhedorDePalavras(textoTeste));
  }else{
    return
  }
}
