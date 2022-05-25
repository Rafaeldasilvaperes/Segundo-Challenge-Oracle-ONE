export function perdeu(array) {
  if (array.length < 5) {
    return;
  } else {
    var perdeu = document.getElementById("palavra-output");
    var msg = "PERDEU!";
    perdeu.value = msg;
    ganhado = true;
    teclada.setAttribute("readonly", false);
    return;
  }
}
