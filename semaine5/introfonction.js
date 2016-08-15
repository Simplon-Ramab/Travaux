var voyelles = "aeiouy";

// la fonction reçoit un caractère en paramètre et doit renvoyer true si le texte contient une voyelle, false sinon
// TODO ne s'arrete qua la premiere lettre
// avec la boucle switch ca marche et plus facile avec la boucle for
function estUneVoyelle( lettre ){
  switch(lettre){
  	case"a":
  	case"e":
  	case"i":
  	case"o":
  	case"u":
  	case"y":
  		return true;
  	default:
  	return false;
  }
}
console.log("estUneVoyelle('f') :", estUneVoyelle('f') ); // false
console.log("estUneVoyelle('a') :", estUneVoyelle('a') ); // true

//avec for
var voyelles = "aeiouy";
var tab=[];
// la fonction reçoit un caractère en paramètre et doit renvoyer true si le texte contient une voyelle, false sinon
function estUneVoyelle( lettre ){
  for (var i = 0; i < voyelles.length; i++) {
    if (voyelles.indexOf(lettre) != -1) {
      return true;
    }else{
      return false;
    }
  }
}

console.log("estUneVoyelle('f') :", estUneVoyelle('f') ); // false
console.log("estUneVoyelle('a') :", estUneVoyelle('a') ); // true
console.log("estUneVoyelle() :", estUneVoyelle() ); // false


// la fonction reçoit un texte en paramètre et renvoie true si il contient une voyelle-Fait
function contientUneVoyelle( texte ){
  for(var i = 0; i < texte.length ; i++){

      if (voyelles.indexOf(texte[i]) != -1) {
          return true;
      }
  }
  return false;
}

console.log( contientUneVoyelle('toto') ); // true
console.log( contientUneVoyelle('cdrf') ); // false

// la fonction reçoit un texte en paramètre et doit renvoyer le nombre de voyelle dans le texte-Fait
function compteVoyelle( texte ){
    var compteur = 0;
    for(var i = 0; i < texte.length ; i++){
    	if (voyelles.indexOf(texte[i]) != -1) {
      switch(texte[i]){
      	case"a":
      	case"e":
      	case"i":
      	case"o":
      	case"u":
      	case"y":
      		compteur+=1;
      		break;
      	default:
      	console.log( "pas de voyelle");
      }
    	}

    }
    return compteur;
}

var resultat = compteVoyelle("Coucou"); // 4

console.log('resultat :', resultat);

// la fonction reçoit un texte en paramètre et doit renvoyer ce texte sans ses voyelles
var voyelles = "aeiouy";

function enleveVoyelle( texteAModifier ){
var res = texteAModifier.replace(/[aeiouy]/gi, '');
            return res;
}

var resultat = enleveVoyelle("Coucou"); // doit renvoyer Cc

console.log('resultat :', resultat);
