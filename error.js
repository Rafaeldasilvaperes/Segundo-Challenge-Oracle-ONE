export function error(errorText){
  var erroSpan = document.createElement('span')
    var Body = document.querySelector('body')
    erroSpan.classList.add('errorPopup')
    erroSpan.textContent = errorText;
    console.log(erroSpan)
    Body.appendChild(erroSpan)
  setTimeout(function(){
    Body.removeChild(erroSpan)
  }, 1500);
  
}