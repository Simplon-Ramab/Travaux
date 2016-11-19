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
    $(document).ready(function(){
      $("#matieres").fadeIn(2000, function(){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){
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
    comment.style.backgroundColor="white";
    comment.style.height="8vh";
    comment.style.width="70vh";
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
    comment.style.backgroundColor="white";
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
    commentm.style.backgroundColor="white";
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
    commentm.style.backgroundColor="white";
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
    commenta.style.color="red";
    commenta.style.backgroundColor="white";
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
