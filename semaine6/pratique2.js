
//creation du contact
var newUser=new Object;
var contact=[];

  function inscription(){
   newUser=prompt("entrez un nouveau votre prenom");
      var stockMail=prompt("entrez un nouveau votre mail");
      var stockmdp= prompt("entrez un nouveau mot de passe");

     newUser={
       mail:stockMail,
       mdp: stockmdp,
     };
     contact.push(newUser);
     console.log("Bienvenue "+ contact );
}
inscription();


//calcul de moyenne (encore!)

  var eleves = [
    {prenom:'Lea',nom:'Petit', note:10},
    {prenom:'Joe',nom:'Martin', note:15},
    {prenom:'Bob',nom:'Dupond', note:12}
];
var somme=0;
 var notes =[[eleves[0].note],[eleves[1].note],[eleves[2].note]];
function calculMoyenneClasse(listeEleves){
    for (i=0; i<notes.length; i++){
    	somme+=Number((notes[i])/notes.length);
    	console.log(somme.toFixed(2));
    }
}
console.log( calculMoyenneClasse(eleves) ); // renvoie 12.33 (2 chiffres après la virgule
