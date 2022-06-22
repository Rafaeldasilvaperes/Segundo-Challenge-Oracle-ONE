export function LinkClick(e) {
  let names = document.getElementsByName("link");
  if (e.target == names[0] || names[0].contains(e.target)) {
    window.open("https://www.linkedin.com/in/rafael-da-silva-peres-ba4228bb/");
  }

  if (e.target == names[1] || names[1].contains(e.target)) {
    window.open("https://www.oracle.com/br/education/oracle-next-education/");
  }

  if (e.target == names[4] || names[4].contains(e.target)) {
    window.open("https://www.alura.com.br/");
  }
}
var link = document.getElementById("svg-container");
link.addEventListener("click", LinkClick, false);