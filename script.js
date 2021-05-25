const button = document.getElementById("button");
function changeColor() {
  button.style.background = "red";
  button.style.width = "170px";
  button.style.height = "40px";
}
button.addEventListener("mouseover", changeColor);
