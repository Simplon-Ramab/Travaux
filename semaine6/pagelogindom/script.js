//creation du contact
var joe={
  checkId:"joe@gmail.com",
  checkmdp :12345,
};
var toto={
  checkId:"toto@gmail.com",
  checkmdp :23456,
};
var contact=[joe, toto];
//console.log(contact[1].checkId)
//console.log(toto.checkId)
//console.log({
//checkId:"toto@gmail.com",
//checkmdp :23456,
//})
//fonction pour l'identifiaction avec des conditions
  var identifiant = document.getElementById('ident').value;
function identification(){
  function login(){

    // si identifiante court
    if( identifiant.length<=4){
      alert("identifiant court");
      login();
    };
    //si absence de @ dans l'identifiant
    if(identifiant.indexOf("@") == -1){
      alert("il manque un @");

    };
    // si tout est true
    for(i=0; i<contact.length; i++){
    if( identifiant==contact[i].checkId){
      return motdepasse();
      //sinon affiche mot de passe inconnu
    }else {
      alert("identifiant inconnu");
      // TODO: appel proposition inscription si inconnu
      inscription();
    }
  }
}

  login();
  function motdepasse(){
    var pwd = document.getElementById('passe').value;
    if(pwd.length<=4){
      alert("mot de passe court");
      motdepasse();
    }
    for(j=0; j<contact.length; j++){
    if( pwd==contact[j].checkmdp){
      alert("Bienvenue "+ identifiant);
      return
    }else{
      alert("Mot de passe incorrect")

    }
  }
}
}
function inscription(){
  var inscrire = confirm("Voulez vous vous inscrire ?");
  if (inscrire === true) {
    var name = prompt("entre ton nom");
    var stockid=;
    var stockmdp= prompt("entrez un nouveau mot de passe");

   window[name]={
     checkId:stockid,
     checkmdp: stockmdp,
   };
   contact.push(eval(name));
   alert("Bienvenue " +eval(name).checkId);
 }else{
   alert("Aurevoir");
 }
}
