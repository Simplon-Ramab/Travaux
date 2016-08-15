var prenom = "paul";

// TODO : ajouter une majuscule - Fait
var prenom = "paul";
console.log(prenom.charAt(0).toUpperCase()+ prenom.slice(1));
console.log('prenom avec premiere lettre en majuscule', prenom); //Paul



var users = ["joe", "lea", "bob", "ann"];
for(i=O; i<users.length; i++){
  users[i];
}
// TODO : ajouter une majuscule à tous les prenoms de la liste
console.log('Prenoms avec premiere lettre en majuscule', users.charAt(0).toUpperCase()+ users.slice(1)/ ); //Joe, Lea, Bob, Ann

var users = ["joe", "lea", "bob", "ann"];
for(i=0; i<users.length; i++){
 var res = users[i].charAt(0).toUpperCase()+ users[i].slice(1);
 console.log('Prenoms avec premiere lettre en majuscule', res);
}



// TODO : calcul de la somme - Fait mais il ne met pas directement le total
var notes = [10, 12, 13, 4, 8];
var somme =0;
for(i=0; i<notes.length; i++){
	 somme += notes[i];
	console.log("la somme est egale à " +somme);
}
//ou quand console log est place a linterieur des accolades ils decomposent un a un. en dehors il donne la somme en une fois

var notes = [10, 12, 13, 4, 8];
var somme =0;
for(i=0; i<notes.length; i++){
	 somme += notes[i];
}
console.log("la somme est egale à " +somme);



// TODO : calcul de la moyenne - Fait
var moyenne = somme/notes.length;
console.log('moyenne', moyenne);

var nouvelleNote = 12;

// TODO : ajouter la note à liste - Fait
notes.push(nouvelleNote);
// TODO : calcul de la nouvelle somme -Fait
var sommeb = 0;
for(i=0; i<notes.length; i++){
	 sommeb += notes[i];
}
console.log('somme des notes', sommeb);

// TODO : Fait
var moyenneb = sommeb/notes.length;
console.log('moyenne' + moyenneb );


// TODO : trouvez la note la plus haute-Fait
var maxi= Math.max.apply("null", notes);
console.log('meilleure note', maxi);

// TODO : trouvez la note la plus haute-Fait
var mini= Math.min.apply("null", notes);
console.log('plus mauvaise note', mini);


// TODO : passage en fonctions-Fait
var notes = [10, 12, 13, 4, 8, 12];
function calculSomme( tableauDeNotes ){
    var somme = 0;
    for(i=0; i<notes.length; i++){
    somme+= notes[i];
}
return somme
}
calculSomme(notes);
console.log(calculSomme());

function calculMoyenne( tableauDeNotes ){
    var moyenne;
    var somme=0;
     for(i=0; i<notes.length; i++){
    somme+= notes[i];
    moyenne=somme/notes.length;
}
    return moyenne;
}
calculMoyenne(notes);
console.log(calculMoyenne());
