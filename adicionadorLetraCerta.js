export function adicionadorLetraCerta(index, char) {
  var span = document.getElementById("container-certas").children;
  var child = span.item(index);
  child.textContent = char;
}
