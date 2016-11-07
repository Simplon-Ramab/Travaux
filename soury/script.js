
function verif(){
  var login = document.getElementById('mdp').value;
  var password = document.getElementById('pword').value;
  var m="habib";
  var pwd=12345;
  var data;
  if((login==m)&&(password==pwd)){
    console.log("correct");
        $(document).ready(function(){
        $("#matieres").fadeIn(2000, function(){
          $("form").slideUp("slow");
        });
        })
}
else{
  console.log("erreur");
}
}

function traiteResultat(event){
	console.log("resultat", event.target.responseText);
	data = JSON.parse(event.target.responseText);
	console.log('Classe', data.classes);
  return data;
}

var requete = new XMLHttpRequest();

/* l'ajout de bind(this) permet de définir que l'on veut que
la fonction traiteResultat soit
 executée dans le contexte courant*/
requete.onload = traiteResultat.bind(this);

requete.open("get", "content.json", true);
requete.send();
