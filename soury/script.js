
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
      $("#matieres").fadeIn(1500, function(){
        $("form").slideUp("slow");
        $(".francais").click("slow", function(){
          $("#matieres").hide("slow", function(){

            $("#blocquizzf").show("slow");
            afficheQuestion();
          });
        });
        $(".maths").click("slow", function(){
          $("#matieres").hide("slow", function(){
            $("#blocquizzf").show("slow").css("background-color","#56DEA7");
            cem();

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
function traiteResultat(event){
  console.log("resultat", event.target.responseText);
  data = JSON.parse(event.target.responseText);
  console.log('Classe', data.classes);
  listeQuestions = data.classes[0].matieres[0].quizz;
  return data;
}
var requete = new XMLHttpRequest();
requete.onloadend = traiteResultat.bind(this);
requete.open("get", "content.json", true);
requete.send();

var count=0;
var indexQuestion = 0;
var listeQuestions;
var blocq=document.getElementById('blocq');
var choix=document.getElementById('choix');
var comment=document.getElementById('comment');

function afficheQuestion(){
  var blocq=document.getElementById('blocq');
  var choix=document.getElementById('choix');
  var questionEnCours = listeQuestions[ indexQuestion ];
  blocq.innerText = questionEnCours.question;
  choix.innerText = listeQuestions[ indexQuestion ].choix;
  document.getElementById('blocr').value="";
}
function verifieReponse() {
  var reponseUtilisateur = document.getElementById('blocr').value;
  var reponseJuste = listeQuestions[ indexQuestion ].reponse;
  var comment=document.getElementById('comment');
  if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
    comment.innerText="Bravo Habib";
    indexQuestion += 1;
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
      if(count<=(indexQuestion/2)){
      comment.innerText="Terminé tu as "+ count+ " points . Bravo";
    }
    else{
      $("#blocqr").hide();
      comment.innerText="Terminé tu as "+ count+ " points. \n Encore des petits efforts";
    }
    }
    }
    else {
      indexQuestion += 1;
      comment.innerText="Faux! la reponse est "+reponseJuste;

      comment.style.color="red";
      comment.style.backgroundColor="white";
      comment.style.height="8vh";
      comment.style.width="70vh";
      if( listeQuestions.length > indexQuestion )
      {
        afficheQuestion();

      } else{
        if(count>=(indexQuestion/2)){
        comment.innerText="Terminé tu as "+ count+ " points . Bravo";
      }
      else{
        $("#blocqr").hide();
        comment.innerText="Terminé tu as "+ count+ " points. \n Encore des petits efforts";
      }
      }
      }

  }
