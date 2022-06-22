export function checaFinalDePagina(){


  if(scrolled == false){
  if ((window.innerHeight + window.scrollY + 100) >= document.body.scrollHeight) {
    var headerWrapper4 = document.querySelector('.nav-wrapper4');
    var caixaErradas = document.querySelector('.caixa-erradas');
   
    headerWrapper4.classList.remove('nav-wrapper4-notvisible');
    caixaErradas.classList.remove('caixa-erradas-notvisible');
    
    
    scrolled = true;
    
    return
    }
    
  }
  
};

var scrolled = false;
window.addEventListener('scroll', checaFinalDePagina, false) 
  