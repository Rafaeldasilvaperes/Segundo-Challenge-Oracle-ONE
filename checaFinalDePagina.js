export function checaFinalDePagina(){
  if ((window.innerHeight + window.scrollY + 100) >= document.body.scrollHeight) {
    var headerWrapper4 = document.querySelector('.nav-wrapper4');
    var caixaErradas = document.querySelector('.caixa-erradas');
    var riscosLetrasCertas = document.querySelectorAll('.span-letra');
    headerWrapper4.classList.add('nav-wrapper4-visible');
    caixaErradas.classList.add('caixa-erradas-visible');
    
    riscosLetrasCertas.forEach((item) => {
      item.classList.add('span-letra-visible');
    })
    }
  };

window.addEventListener('scroll', checaFinalDePagina, false) 
  