
function pop(){
  //fonction pour afficher le pop up
  // creer en DOM avec l'Id
  var modal = document.getElementById("myModal");

// creer le bouton en DOM
var btn = document.getElementsByClassName("myBtn")[0];

// lier la balise <span> avec l'action fermer"close"
var span = document.getElementsByClassName("close")[0];

// quand on clique sur le bouton, ouvre l'affiche
btn.onclick = function() {
    modal.style.display = "block";
}

// quand on clique sur le x de la balise <span> (x),ferme l'affiche
span.onclick = function() {
    modal.style.display = "none";
}

// quand on clique en dehors ,
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// fin fonction pour pop up
}
pop();
