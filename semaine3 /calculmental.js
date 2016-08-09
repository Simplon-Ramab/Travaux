
function question_jeux(){
  var question =prompt("Combien font :"+ generateur());
  comparaison(generateur);
  function generateur(){
    tab =[addition(), soustraction(), multiplication()];
    return choix=tab[Math.floor(Math.random()*tab.length)];
  }
  function addition(){
    nb1= Math.round(Math.random()*10);
    nb2= Math.round(Math.random()*10);
    return(nb1+ "+" +nb2);
  }
  function soustraction(){
    nb1= Math.round(Math.random()*10);
    nb2= Math.round(Math.random()*10);
    return(nb1+ "-" +nb2);
  }
  function multiplication(){
    nb1= Math.round(Math.random()*10);
    nb2= Math.round(Math.random()*10);
    return(nb1+ "*" +nb2);
  }
  function comparaison(){
    if(question==eval(choix)){
      alert("Correct");
    }else{
      alert("Faux");
      question_jeux();
    }
  }


};
question_jeux();
