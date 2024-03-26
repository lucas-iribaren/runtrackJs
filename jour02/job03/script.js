var compteur = document.getElementById("compteur")
var button = document.getElementById("button")
let count = 0

function addOne(){

  count++;
  compteur.textContent = count;
}

button.addEventListener('click', addOne)