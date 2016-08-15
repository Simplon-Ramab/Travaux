/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */

// longueur
var texte = "un texte";


// TODO fait
var nombreDeCaracteres = texte.length;
console.log('nombre de caracteres', nombreDeCaracteres); // 8

// TODO fait
var quatriemeCaractere = texte[3];
console.log('quatrieme caractere', quatriemeCaractere ); // t

// TODO fait
var quatriemeEtCinquiemeCaracteres = texte[4]+texte[5]  ;
console.log('quatrieme et cinquieme caractere', quatriemeEtCinquiemeCaracteres ); // t

// TODO fait
var majuscule = texte.toUpperCase();;
console.log('majuscule', majuscule ); // UN TEXTE

// TODO fait
var premierMot = texte.slice(0, 2);
console.log('premierMot', premierMot ); // u

// TODO Fait
console.log('premierMotEnMajuscule', premierMot.toUpperCase() );

var prenom = prompt('votre prenom ?');
// TODO - Fait
console.log(prenom);

/*
 * nombres
 * fonctions utiles : parseInt , parseFloat, isNaN
 */

var valeur1 = '15';
var somme = valeur1 + 3;
console.log('somme == 18', somme == 18 ); // true

var age = 32;
// TODO fait
console.log( "jai "+ age+ " ans"); // j'ai 32 ans

/*
* boucles & tableaux
 */
//-Fait
 var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
 var nombreDeMails =mails[1];
 console.log('nombreDeMails', nombreDeMails );

 var dernierMail = (mails[mails.length -1]);
 console.log('dernierMail', dernierMail );

 // est ce que tout les mails sont gmail-Fait
 for( var i = 0 ; i < mails.length ; i++ ){
      if ((mails[i]).toLowerCase().includes(("gmail"))) {
      console.log("Oui");
    } else {
      console.log("Non");
    }
}

 console.log('tous les mails sont gmail : ', queDesGmails );

 // mettre les mails en minuscules - Fait
var mailsMinuscule = [] ;
for( var i = 0 ; i < mails.length ; i++ ){
    mailsMinuscule.push(mails[i].toLowerCase());
}
console.log('mails en minuscules', mailsMinuscule );



 // TODO : remplacez les @ par des _
 var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var resultat=[]
for( i = 0 ; i < mails.length ; i++ ){

     resultat.push(mails[i].replace("@", "_"));
}
console.log(resultat );



 // TODO : supprimez les .com
 var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var resultat=[]
for( i = 0 ; i < mails.length ; i++ ){

     resultat.push(mails[i].replace(".com", ""));
}
console.log(resultat );
