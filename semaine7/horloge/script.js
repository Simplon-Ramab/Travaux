var nomMois=["Janvier","Février","Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre", "Novembre", "Décembre"];
var nomJour=["Dimanche","Lundi","Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi"];



function horloge(){

   var date= new Date();
   var jour = date.getDay();
   var mois = date.getMonth();
   var datejour = date.getDate();
   var annee = date.getFullYear();
   var heure = date.getHours();
   var minutes = date.getMinutes();
   var secondes = date.getSeconds();

if (datejour==1){datejour="1er";}
if (heure<10){heure="0"+heure;}
if (minutes<10){minutes="0"+minutes;}
if (secondes<10){secondes="0"+secondes;}
//if(minutes==12){ document.body.style.backgroundColor = red;}
//  var couleur = tcouleurs[heure];
var affichej=nomJour[jour]+" "+datejour+" "+nomMois[mois]+" "+annee;
var afficheh=heure+":"+minutes+":"+secondes;
  document.getElementById("datej").innerHTML= affichej;
  document.getElementById("temps").innerHTML = afficheh;

//  document.bgColor = couleur;
  //  document.body.style.backgroundColor = couleur; ne marche pas
setTimeout("horloge()",1000);
setTimeout(add,100);
}

function addColor(c1,c2){
var hexStr = (parseInt(c1, 16) + parseInt (c2, 16)).toString(16);
while (hexStr.length<6) {hexStr= '0' + hexStr; }
if(hexStr.length > 6){
  hexStr ='000001';
}
return hexStr;
}

var  couleur = '000001';
function add(){
  for (var i = 0; i<6; i++){
    couleur=addColor(couleur, '010010');
    var a =document.getElementsByTagName('body');
    a=a[0];
    a.style.backgroundColor='#'+couleur;

  }
}
