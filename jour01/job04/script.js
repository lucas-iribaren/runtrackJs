function bisextile(annee) {
  if (annee % 4 === 0){
    if (annee % 100 === 0 && annee % 400 !== 0){
      return false;
    } else {
      return true;
    }
} else {
    return false;
}
}
console.log(bisextile(2023)); 
console.log(bisextile(2024)); 

function verifierBissextile() {
  var  anneeInput = document.getElementById("anneeInput").value;
  var resultat = document.getElementById("resultat")

  if (bisextile(anneeInput)){
    resultat.textContent = "L'année " + anneeInput + " est bisextile"
  } else {
    resultat.textContent = "L'année "+ anneeInput + " n'est pas bisextile"
  }
}