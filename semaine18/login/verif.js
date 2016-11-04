$(document).ready(function(){
  $("#button").click(function (){
  console.log("ok");
      function loGin(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    console.log("login = "+login);
    console.log('password = '+password);
        // si identifiante court
        if(( login.length<=4)||(password.length<=4)){
        


        }
        //si absence de @ dans l'identifiant
        else if(login.indexOf("@") == -1){
          console.log("il manque un @ ou Mot de passe incorrect");

        }
        else if(true){
          var data = "?login="+login+"&password="+password;

          $.ajax({
            type: "POST",
            url: "login.php",
            data: "login="+login+"&password="+password,
          }).done(function(data) {
              console.log("success : "+data+"." );
          });

        }
      else {
          console.log("identifiant inconnu");
        }
      }
      loGin();
      // function motdepasse(){
      //   var password = document.getElementById("password");
      //   if(password.length<=4){
      //   console.log("mot de passe court");
      //     motdepasse();
      //   }else{
      //     console.log("Mot de passe incorrect")
      //
      //   }
      // }
  }
)})
