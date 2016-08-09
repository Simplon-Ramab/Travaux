var checkId ="joe@gmail.com";
var checkmdp = 12345;
function identification(){
  function login(){
    identifiant = prompt("Entrez votre identifiant");

    if( identifiant.length<=4){
      alert("identifiant court");
      return login();
    }
    else if(identifiant.indexOf("@") == -1){
      alert("il manque un @");
      login();
    }
    else if( identifiant==checkId){
      alert("correct");
      return motdepasse();
    }
    else{
      return login();

    }

  }
  login();
  function motdepasse(){
    pwd = prompt("Entrez votre mot de passe");
    if(pwd==checkmdp){
      alert("Bienvenue");
    }
    else if(pwd.length<=4){
      alert("mot de passe court");
      motdepasse();
    }
    else{
    	alert("Mot de passe incorrect")
      return motdepasse();
    }
  }
}

identification();
