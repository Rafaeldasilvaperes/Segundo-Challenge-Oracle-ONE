export function adicionaLetrasErradas(letraErrada) {
  campoErradas.textContent = campoErradas.textContent + letraErrada
}

export function limpaLetrasErradas(){
  campoErradas.textContent = ''
}

var campoErradas = document.getElementById('caixa-erradas-saida')