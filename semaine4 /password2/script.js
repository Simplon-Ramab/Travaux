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
function identification(){
  function login(){
    identifiant = prompt("Entrez votre identifiant");
    // si identifiante court
    if( identifiant.length<=4){
      alert("identifiant court");
      return login();
    }
    //si absence de @ dans l'identifiant
    else if(identifiant.indexOf("@") == -1){
      alert("il manque un @");
      login();
    }
    // si tout est true
    else if(( identifiant==contact[0].checkId)||(identifiant==contact[1].checkId)){
      alert("correct");
      return motdepasse();
      //sinon affiche mot de passe inconnu
    }else {
      alert("identifiant inconnu");
      // TODO: appel proposition inscription si inconnu
      inscription();
    }
  }
  login();
  function motdepasse(){
    pwd = prompt("Entrez votre mot de passe");
    if(( pwd==contact[0].checkmdp)||( pwd==contact[1].checkmdp)){
      alert("Bienvenue "+ identifiant);
    }
    else if(pwd.length<=4){
      alert("mot de passe court");
      motdepasse();
    }else{
      alert("Mot de passe incorrect")
      return motdepasse();
    }
  }
  function inscription(){
    var inscrire = confirm("Voulez vous vous inscrire ?");
    if (inscrire === true) {
      var stockid=prompt("entrez un nouveau identifiant");
      var stockmdp= prompt("entrez un nouveau mot de passe");

     var newUser={
       checkId:stockid,
       checkmdp: stockmdp,
     };
     contact.push(newUser);
     alert("Bienvenue " +newUser.checkId);
   }else{
     alert("Aurevoir");
   }
  }

}
identification();
