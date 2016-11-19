// lancement du programme
function verif(){
  var login = document.getElementById('mdp').value;
  var password = document.getElementById('pword').value;
  var user1= data.classes[0].prenom;
  var pwd1=data.classes[0].motpasse;
  var user2= data.classes[1].prenom;
  var pwd2=data.classes[1].motpasse;
  if((login==user1)&&(password==pwd1)){
    document.getElementById("user").innerHTML = data.classes[0].prenom;
    document.getElementById("demo").innerHTML = "Salut";
    document.getElementById("quitter").innerHTML = "Quitter";
    $(document).ready(function(){
      $(".ident").slideUp(1000, function(){
        $("#matieres").fadeIn(1500, function (){
          $("form").slideUp("slow");
          $(".francais").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizzf").show("slow");
              afficheQuestion();
            });
          });
          $(".maths").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizzm").show("slow").css("background-color","#56DEA7");
              ceMaths();
            });
          });
          $(".anglais").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizza").show("slow").css("background-color","#F26175 ");
              ceAnglais();
            });
          });
        });
      });
    })
  }
  else if((login==user2)&&(password==pwd2)){
    document.getElementById("user").innerHTML = data.classes[1].prenom;
    document.getElementById("demo").innerHTML = "Salut";
    document.getElementById("quitter").innerHTML = "Quitter";
    $(document).ready(function(){
      $(".ident").slideUp(1000, function(){
        $("#matieres").fadeIn(1500, function (){
          $("form").slideUp("slow");
          $(".francais").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizzf5").show("slow");
              afficheQuestion5();
            });
          });
          $(".maths").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizz5m").show("slow").css("background-color","#56DEA7");
              afficheQuestion5m();
            });
          });
          $(".anglais").click("slow", function(){
            $("#matieres").hide("slow", function(){
              $("#blocquizz5a").show("slow").css("background-color","#F26175 ");
              afficheQuestion5a();
            });
          });
        });
      });
    })
  }
  else{
    console.log("erreur");
  }
}
//programme pour retour partie ce2 francais
function retourCe(){
  $(document).ready(function(){
    $("#blocquizzf").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf").show("slow");
            afficheQuestion();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzm").show("slow").css("background-color","#56DEA7");
            ceMaths();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf").show("slow").css("background-color","#F26175 ");
          });
        });
      });
    });
  })
}
//programme pour retour partie ce2 maths
function retourCem(){
  $(document).ready(function(){
    $("#blocquizzm").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf").show("slow");
            afficheQuestion();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzm").show("slow").css("background-color","#56DEA7");
            ceMaths();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizza").show("slow").css("background-color","#F26175 ");
          });
        });
      });
    });
  })
}
//programme pour retour partie ce2 anglais
function retourCea(){
  $(document).ready(function(){
    $("#blocquizza").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf").show("slow");
            afficheQuestion();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzm").show("slow").css("background-color","#56DEA7");
            ceMaths();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizza").show("slow").css("background-color","#F26175 ");
ceAnglais();

          });
        });
      });
    });
  })
}
//ajax
function traiteResultat(event){
  console.log("resultat", event.target.responseText);
  data = JSON.parse(event.target.responseText);
  console.log('Classe', data.classes);
  listeQuestions = data.classes[0].matieres[0].quizz;
  listeMaths = data.classes[0].matieres[1].quizz;
  listeAnglais=data.classes[0].matieres[2].quizz;
  listeQuestions5 = data.classes[1].matieres[0].quizz;
  listeQuestions5m = data.classes[1].matieres[1].quizz;
  listeQuestions5a = data.classes[1].matieres[2].quizz;
  return data;
}
var requete = new XMLHttpRequest();
requete.onloadend = traiteResultat.bind(this);
requete.open("get", "content.json", true);
requete.send();

//lancement programme francais ce2
var count=0;
var numero = 1;
var indexQuestion = 0;
var listeQuestions;
var blocq=document.getElementById('blocq');
var choix=document.getElementById('choix');
var blocf=document.getElementById('blocf');
function afficheQuestion(){
  var comment=document.getElementById('comment');
  var blocq=document.getElementById('blocq');
  var choix=document.getElementById('choix');
  var blocf=document.getElementById('blocf');
  var questionEnCours = listeQuestions[ indexQuestion ];
  blocq.innerText = questionEnCours.question;
  choix.innerText = listeQuestions[ indexQuestion ].choix;
  blocf.innerText = "Question "+numero;
  document.getElementById('blocr').value="";
  document.getElementById('comment').value="";
}
var count=0;
var numero = 1;
var indexQuestion = 0;
function verifieReponse() {
  var blocf=document.getElementById('blocf');
  var reponseUtilisateur = document.getElementById('blocr').value;
  var reponseJuste = listeQuestions[ indexQuestion ].reponse;
  var comment=document.getElementById('comment');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    comment.innerText="Bravo Habib";
    blocf.innerText="Question"+ numero;
    indexQuestion += 1;
    numero++;
    count++;
    comment.innerText="Bravo Habib";
    comment.style.color="green";
    comment.style.height="8vh";
    comment.style.width="auto";
    if( listeQuestions.length > indexQuestion )
    {
      afficheQuestion();
    } else{
      if(count<=(numero/2)){
        comment.innerText="Terminé tu as "+ count+ " points . Des petis efforts";
      }
      else if(count==numero){
        comment.innerText="Terminé tu as "+ count+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqr").hide();
        comment.innerText="Terminé tu as "+ count+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    indexQuestion += 1;
    numero += 1;
    comment.innerText="Faux! la reponse est "+reponseJuste;
    comment.style.color="red";
    // comment.style.backgroundColor="white";
    comment.style.height="8vh";
    comment.style.width="70vh";
    if( listeQuestions.length > indexQuestion )
    {
      afficheQuestion();
    } else{
      if(count>=(numero/2)){
        comment.innerText="Terminé tu as "+ count+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqr").hide();
        comment.innerText="Terminé tu as "+ count+ " points. Revoies tes léçons";
      }
    }
  }
}
// partie maths
var countm=0;
var numerom = 1;
var indexMaths = 0;
var listeMaths;
function ceMaths(){
  var commentm=document.getElementById('commentm');
  var blocqm=document.getElementById('blocqm');
  var choixm=document.getElementById('choixm');
  var blocfm=document.getElementById('blocfm');
  var questionEnCours = listeMaths[ indexMaths ];
  blocqm.innerText = questionEnCours.question;
  choixm.innerText = listeMaths[ indexMaths ].choix;
  blocfm.innerText = "Question "+numerom;
  document.getElementById('blocrm').value="";
  document.getElementById('commentm').value="";
}
var countm=0;
var numerom = 1;
var indexMaths = 0;
function verifieReponseMaths() {
  var blocfm=document.getElementById('blocfm');
  var reponseUtilisateur = document.getElementById('blocrm').value;
  var reponseJuste = listeMaths[ indexMaths ].reponse;
  var commentm=document.getElementById('commentm');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    commentm.innerText="Bravo Habib";
    blocfm.innerText="Question"+ numerom;
    indexMaths += 1;
    numerom++;
    countm++;
    commentm.innerText="Bravo Habib";
    commentm.style.color="green";
    // commentm.style.backgroundColor="white";
    commentm.style.height="8vh";
    commentm.style.width="70vh";
    if( listeMaths.length > indexMaths)
    {
      ceMaths();
    } else{
      if(countm<=(numerom/2)){
        commentm.innerText="Terminé tu as "+ countm+ " points . Des petis efforts";
      }
      else if(countm==numerom){
        commentm.innerText="Terminé tu as "+ countm+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqrm").hide();
        commentm.innerText="Terminé tu as "+ countm+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    indexMaths += 1;
    numerom += 1;
    commentm.innerText="Faux! la reponse est "+reponseJuste;
    commentm.style.color="red";
    // commentm.style.backgroundColor="white";
    commentm.style.height="8vh";
    commentm.style.width="70vh";
    if( listeMaths.length > indexMaths )
    {
      ceMaths();
    } else{
      if(countm>=(numerom/2)){
        commentm.innerText="Terminé tu as "+ countm+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqrm").hide();
        commentm.innerText="Terminé tu as "+ countm+ " points. Revoies tes léçons";
      }
    }
  }
}
// partie anglais ce
var counta=0;
var numeroa = 1;
var indexAnglais = 0;
var listeAnglais;
function ceAnglais(){
  var commenta=document.getElementById('commenta');
  var blocqa=document.getElementById('blocqa');
  var choixa=document.getElementById('choixa');
  var blocfa=document.getElementById('blocfa');
  var questionEnCours = listeAnglais[ indexAnglais ];
  blocqa.innerText = questionEnCours.question;
  choixa.innerText = listeAnglais[ indexAnglais ].choix;
  blocfa.innerText = "Question "+numeroa;
  document.getElementById('blocra').value="";
  document.getElementById('commenta').value="";
}
var counta=0;
var numeroa = 1;
var indexAnglais = 0;
function verifieReponseAnglais() {
  var blocfa=document.getElementById('blocfa');
  var reponseUtilisateur = document.getElementById('blocra').value;
  var reponseJuste = listeAnglais[ indexAnglais ].reponse;
  var commenta=document.getElementById('commenta');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    commenta.innerText="Bravo Habib";
    blocfa.innerText="Question"+ numeroa;
    indexAnglais += 1;
    numeroa++;
    counta++;
    commenta.innerText="Bravo Habib";
    commenta.style.color="green";
    commenta.style.backgroundColor="white";
    commenta.style.height="8vh";
    commenta.style.width="70vh";
    if( listeAnglais.length > indexAnglais)
    {
      ceAnglais();
    } else{
      if(counta<=(numeroa/2)){
        commenta.innerText="Terminé tu as "+ counta+ " points . Des petis efforts";
      }
      else if(counta==numeroa){
        commenta.innerText="Terminé tu as "+ counta+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqra").hide();
        commenta.innerText="Terminé tu as "+ counta+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    indexAnglais += 1;
    numeroa += 1;
    commenta.innerText="Faux! la reponse est "+reponseJuste;
    commenta.style.color="white";
    // commenta.style.backgroundColor="white";
    commenta.style.height="8vh";
    commenta.style.width="70vh";
    if( listeAnglais.length > indexAnglais )
    {
      ceAnglais();
    } else{
      if(counta>=(numeroa/2)){
        commenta.innerText="Terminé tu as "+ counta+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqra").hide();
        commenta.innerText="Terminé tu as "+ counta+ " points. Revoies tes léçons";
      }
    }
  }
}
// FIN PROGRAMME CE2 HABIB
// DEBUT PROGRAMME 5EME ADAMA
var count5=0;
var numero5 = 1;
var index5 = 0;
var listeQuestions5;
function afficheQuestion5(){
  var comment5=document.getElementById('comment5');
  var blocq5=document.getElementById('blocq5');
  var choix5=document.getElementById('choix5');
  var blocf5=document.getElementById('blocf5');
  var questionEnCours = listeQuestions5[ index5 ];
  blocq5.innerText = questionEnCours.question;
  choix5.innerText = listeQuestions5[ index5 ].choix;
  blocf5.innerText = "Question "+numero5;
  document.getElementById('blocr5').value="";
  document.getElementById('comment5').value="";
}
var count5=0;
var numero5 = 1;
var index5= 0;
function verifieReponse5() {
  var blocf5=document.getElementById('blocf5');
  var reponseUtilisateur = document.getElementById('blocr5').value;
  var reponseJuste = listeQuestions5[ index5 ].reponse;
  var comment5=document.getElementById('comment5');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    comment5.innerText="Bravo Adama";
    blocf5.innerText="Question"+ numero5;
    index5 += 1;
    numero5++;
    count5++;
    comment5.innerText="Bravo Adama";
    comment5.style.color="green";
    // comment5.style.backgroundColor="white";
    comment5.style.height="8vh";
    comment5.style.width="70vh";
    if( listeQuestions5.length > index5)
    {
      afficheQuestion5();
    } else{
      if(count5<=(numero5/2)){
        comment5.innerText="Terminé tu as "+ count5+ " points . Des petis efforts";
      }
      else if(count5==numero5){
        comment5.innerText="Terminé tu as "+ count5+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqr5").hide();
        comment5.innerText="Terminé tu as "+ count5+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    index5 += 1;
    numero5 += 1;
    comment5.innerText="Faux! la reponse est "+reponseJuste;
    comment5.style.color="red";
    // comment5.style.backgroundColor="white";
    comment5.style.height="8vh";
    comment5.style.width="70vh";
    if( listeQuestions5.length > index5 )
    {
      afficheQuestion5();
    } else{
      if(count5>=(numero5/2)){
        comment5.innerText="Terminé tu as "+ count5+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqr5").hide();
        comment5.innerText="Terminé tu as "+ count5+ " points. Revoies tes léçons";
      }
    }
  }
}

// PARTIE MATHS ADAMA
var count5m=0;
var numero5m = 1;
var index5m = 0;
var listeQuestions5m;
function afficheQuestion5m(){
  var comment5m=document.getElementById('comment5m');
  var blocq5m=document.getElementById('blocq5m');
  var choix5m=document.getElementById('choix5m');
  var blocf5m=document.getElementById('blocf5m');
  var questionEnCours = listeQuestions5m[ index5m ];
  blocq5m.innerText = questionEnCours.question;
  choix5m.innerText = listeQuestions5m[ index5m ].choix;
  blocf5m.innerText = "Question "+numero5m;
  document.getElementById('blocr5m').value="";
  document.getElementById('comment5m').value="";
}//
var count5m=0;
var numero5m = 1;
var index5m= 0;
function verifieReponse5m() {
  var blocf5m=document.getElementById('blocf5m');
  var reponseUtilisateur = document.getElementById('blocr5m').value;
  var reponseJuste = listeQuestions5m[ index5m ].reponse;
  var comment5m=document.getElementById('comment5m');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    comment5m.innerText="Bravo Adama";
    blocf5m.innerText="Question"+ numero5m;
    index5m += 1;
    numero5m++;
    count5m++;
    comment5m.innerText="Bravo Adama";
    comment5m.style.color="green";
    // comment5m.style.backgroundColor="white";
    comment5m.style.height="8vh";
    comment5m.style.width="70vh";
    if( listeQuestions5m.length > index5m)
    {
      afficheQuestion5m();
    } else{
      if(count5m<=(numero5m/2)){
        comment5m.innerText="Terminé tu as "+ count5m+ " points . Des petis efforts";
      }
      else if(count5m==numero5m){
        comment5m.innerText="Terminé tu as "+ count5m+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqr5m").hide();
        comment5m.innerText="Terminé tu as "+ count5m+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    index5m += 1;
    numero5m += 1;
    comment5m.innerText="Faux! la reponse est "+reponseJuste;
    comment5m.style.color="red";
    // comment5m.style.backgroundColor="white";
    comment5m.style.height="8vh";
    comment5m.style.width="70vh";
    if( listeQuestions5m.length > index5m )
    {
      afficheQuestion5m();
    } else{
      if(count5m>=(numero5m/2)){
        comment5m.innerText="Terminé tu as "+ count5m+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqr5m").hide();
        comment5m.innerText="Terminé tu as "+ count5m+ " points. Revoies tes léçons";
      }
    }
  }
}

// PARTIE ANGLAIS ADAMA
var count5a=0;
var numero5a = 1;
var index5a = 0;
var listeQuestions5a;
function afficheQuestion5a(){
  var comment5a=document.getElementById('comment5a');
  var blocq5a=document.getElementById('blocq5a');
  var choix5a=document.getElementById('choix5a');
  var blocf5a=document.getElementById('blocf5a');
  var questionEnCours = listeQuestions5a[ index5a ];
  blocq5a.innerText = questionEnCours.question;
  choix5a.innerText = listeQuestions5a[ index5a ].choix;
  blocf5a.innerText = "Question "+numero5a;
  document.getElementById('blocr5a').value="";
  document.getElementById('comment5a').value="";
}//
var count5a=0;
var numero5a = 1;
var index5a= 0;
function verifieReponse5a() {
  var blocf5a=document.getElementById('blocf5a');
  var reponseUtilisateur = document.getElementById('blocr5a').value;
  var reponseJuste = listeQuestions5a[ index5a ].reponse;
  var comment5a=document.getElementById('comment5a');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    comment5a.innerText="Bravo Adama";
    blocf5a.innerText="Question"+ numero5a;
    index5a += 1;
    numero5a++;
    count5a++;
    comment5a.innerText="Bravo Adama";
    comment5a.style.color="green";
    // comment5a.style.backgroundColor="white";
    comment5a.style.height="8vh";
    comment5a.style.width="70vh";
    if( listeQuestions5a.length > index5a)
    {
      afficheQuestion5a();
    } else{
      if(count5a<=(numero5a/2)){
        comment5a.innerText="Terminé tu as "+ count5a+ " points . Des petis efforts";
      }
      else if(count5a==numero5a){
        comment5a.innerText="Terminé tu as "+ count5a+ " points.  Bravo ça vas";
      }
      else{
        $("#blocqr5a").hide();
        comment5a.innerText="Terminé tu as "+ count5a+ " Bravo t'es vraiment fort";
      }
    }
  }
  else {
    index5a += 1;
    numero5a += 1;
    comment5a.innerText="Faux! la reponse est "+reponseJuste;
    comment5a.style.color="white";
    // comment5a.style.backgroundColor="white";
    comment5a.style.height="8vh";
    comment5a.style.width="70vh";
    if( listeQuestions5a.length > index5a )
    {
      afficheQuestion5a();
    } else{
      if(count5a>=(numero5a/2)){
        comment5a.innerText="Terminé tu as "+ count5a+ " points . Encore des petits efforts";
      }
      else{
        $("#blocqr5a").hide();
        comment5a.innerText="Terminé tu as "+ count5a+ " points. Revoies tes léçons";
      }
    }
  }
}


//programme pour retour partie 5eme français
function retour5f(){
  $(document).ready(function(){
    $("#blocquizzf5").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf5").show("slow");
            afficheQuestion5();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5m").show("slow").css("background-color","#56DEA7");
          afficheQuestion5m();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5a").show("slow").css("background-color","#F26175 ");
            afficheQuestion5a();
          });
        });
      });
    });
  })
}
//programme pour retour partie ce2 maths
function retour5fm(){
  $(document).ready(function(){
    $("#blocquizz5m").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf5").show("slow");
            afficheQuestion5();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5m").show("slow").css("background-color","#56DEA7");
          afficheQuestion5m();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5a").show("slow").css("background-color","#F26175 ");
afficheQuestion5a();

          });
        });
      });
    });
  })
}
//programme pour retour partie ce2 anglais
function retour5fa(){
  $(document).ready(function(){
    $("#blocquizz5a").hide(1000, function(){
      $("#matieres").fadeIn(1500, function (){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf5").show("slow");
            afficheQuestion5();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5m").show("slow").css("background-color","#56DEA7");
          afficheQuestion5m();

          });
        });
        $(".anglais").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizz5a").show("slow").css("background-color","#F26175 ");
afficheQuestion5a();

          });
        });
      });
    });
  })
}
