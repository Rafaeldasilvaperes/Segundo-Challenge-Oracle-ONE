export function clicked(){
  btn.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.add('clicked')
    });

  });
}

export function unClicked(){
  btn.forEach((button) => {
      button.classList.remove('clicked');
      button.classList.remove('blockClick')
  });
}

export function blockClick(){
  btn.forEach((button) => {
    button.classList.add('blockClick');

});
}

var btn = document.querySelectorAll('.key');