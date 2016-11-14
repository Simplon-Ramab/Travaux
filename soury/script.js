
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
      $("#matieres").fadeIn(2000, function(){
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
  return data;
}
var requete = new XMLHttpRequest();
requete.onload = traiteResultat.bind(this);
requete.open("get", "content.json", true);
requete.send();



var indexQuestion = 0;
       var listeQuestions = data.classes[0].matieres[0].quizz;
       function afficheQuestion(){
           var questionEnCours = listeQuestions[ indexQuestion ];
           document.getElementById('blocq').innerText = questionEnCours.texte;
           document.getElementById('blocr').value = "";
       }
       function verifieReponse() {
           var reponseUtilisateur = document.getElementById('blocr').value;
           var reponseJuste = listeQuestions[ indexQuestion ].reponse;
           if (reponseUtilisateur.toLowerCase() == reponseJuste.toLowerCase()) {
               indexQuestion += 1;
               if( listeQuestions.length > indexQuestion )
               {
                   alert('bravo');
                   afficheQuestion();
               } else
                   alert('bravo / terminé');

           }
           else {
               alert('faux');
           }
       }


// function cef(){
//
//   function rand(a){
//     return Math.floor(Math.random()*a);
//   }
//   do{
//   var blocr = document.getElementById('blocr').value;
//     var questionf = data.classes[0].matieres[0].quizz;
// var count;
//     var tailleInit = (data.classes[0].matieres[0].quizz).length;
//     var nombreDeReussite =0;
//     do{
//       var tentative = 1;
//       var index = rand(questionf.length-1);
//       var quizzf = questionf[index].question;
//       var reponsef = questionf[index].reponse.toLowerCase();
//       var reussi = true;
//
//       do{
//         document.getElementById("blocq").innerHTML = questionf[index].question;
//         document.getElementById("choix").innerHTML = questionf[index].choix;
//         if(blocr == reponsef){
//           console.log("Bravo");
//           reussi = true;
//           count++;
//         }else{
//           console.log("faux");
//           reussi = false;
//         }
//         tentative++;
//       }while(tentative < 4 && !reussi);
//
//       questionf.splice(index,1);
//       if(reussi){
//         nombreDeReussite++;
//       }
//     }while(questionf.length >= 1);
//     alert(nombreDeReussite+" reponse juste sur "+ tailleInit);
//     if(nombreDeReussite == tailleInit){
//     console.log("juste");
//     }else{
//     console.log(" ca vas");
//     }
//   }while(console.log("faux"));
// };
// function cem(){
//
//   function rand(a){
//     return Math.floor(Math.random()*a);
//   }
//   do{
//     var questionf = data.classes[0].matieres[1].quizz;
// var count;
//     var tailleInit = (data.classes[0].matieres[1].quizz).length;
//     var nombreDeReussite =0;
//     do{
//       var tentative = 1;
//       var index = rand(questionf.length-1);
//       var quizzf = questionf[index].question;
//       var reponsef = questionf[index].reponse.toLowerCase();
//       var reussi = true;
//
//       do{
//         document.getElementById("blocq").innerHTML = questionf[index].question;
//         document.getElementById("choix").innerHTML = questionf[index].choix;
//         if(blocr === reponsef){
//           alert("Bravo");
//           reussi = true;
//           count++;
//         }else{
//           alert("faux");
//           reussi = false;
//         }
//         tentative++;
//       }while(tentative < 4 && !reussi);
//
//       questionf.splice(index,1);
//       if(reussi){
//         nombreDeReussite++;
//       }
//     }while(questionf.length >= 1);
//     alert(nombreDeReussite+" reponse juste sur "+ tailleInit);
//     if(nombreDeReussite == tailleInit){
//       alert("juste");
//     }else{
//       alert(" ca vas");
//     }
//   }while(confirm("faux"));
// };
